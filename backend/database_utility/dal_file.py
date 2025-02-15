from database_utility.db_connection import DataBaseUtility
from database_utility import constant

class FetchAllQueriesFromDb(DataBaseUtility):
    def fetch_must_read_books(self, *args, **kwargs):
        table_name= constant.BOOK_TABLE

        query= f"""
                    select 
                        title, 
                        authors, 
                        small_image_url, 
                        original_publication_year,
                        average_rating  
                    from {table_name}

                    """
        
        df= self.execute_query(query)
        return df