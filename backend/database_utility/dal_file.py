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
    
    def fetch_must_watch_movies(self, *args, **kwargs):
        table_name=constant.MOVIES_TABLE

        query= f"""
                    select 
                        title, 
                        director, 
                        release_year, 
                        rating, 
                        listed_in, 
                        description, 
                        type 
                    from {table_name}

                    """
        df= self.execute_query(query)
        return df
    
    def fetch_top_youtube_videos(self, *args, **kwargs):
        table_name=constant.YOUTUBE_TABLE

        query= f"""
                    select 
                        title, 
                        channel_title, 
                        publish_time, 
                        views, 
                        likes, 
                        thumbnail_link 
                    from {table_name};
                    """
        df= self.execute_query(query)
        return df