import os
import django
from django.db import connections  # ✅ Use connections instead of connection
from contextlib import contextmanager
import pandas as pd 

class DataBaseUtility:
    def __init__(self, alias="default"):
        """Initialize the utility with the option to specify database alias."""
        self.alias = alias

    @property
    def connection(self):
        """Get the correct database connection."""
        return connections[self.alias]  # ✅ Fix incorrect connection access

    @contextmanager
    def get_cursor(self):
        """A context manager that gets a cursor and ensures proper closing."""
        cursor = None
        try:
            conn = self.connection  # ✅ Get correct connection
            cursor = conn.cursor()
            yield cursor  # ✅ Yield cursor properly
        except Exception as e:
            print(f"Database operation failed: {e}")
        finally:
            if cursor:
                cursor.close()

    def execute_query(self, query, params=None, return_type='df'):
        """Executes a selected query and returns rows."""
        try:
            with self.get_cursor() as cursor:
                cursor.execute(query, params or [])
                if return_type == 'df':
                    df = pd.DataFrame(cursor.fetchall(), columns=[desc[0] for desc in cursor.description])
                    return df
                else:
                    return cursor.fetchall()
        except Exception as e:
            print(f"Error executing query: {e}")
            return pd.DataFrame() if return_type == 'df' else []
