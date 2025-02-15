from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.viewsets import ViewSet
from database_utility.dal_file import FetchAllQueriesFromDb
from rest_framework.decorators import action
import numpy as np
import pandas as pd
# Create your views here.
class AllProjectView(ViewSet):
    access_layer= FetchAllQueriesFromDb()

    @action(detail=False, methods=['get'], url_path='must_read_books')
    def get_must_read_books(self, request):
        
        data= self.access_layer.fetch_must_read_books()
        data= data.dropna()
        response= data.to_dict(orient='records')
        return JsonResponse(response, safe=False)
    
    @action(detail=False, methods=['get'], url_path='must_watch_movies')
    def get_must_watch_movies(self, request):
        data= self.access_layer.fetch_must_watch_movies()
        data= data.dropna()
        response= data.to_dict(orient='records')
        return JsonResponse(response, safe=False)

    @action(detail=False, methods=['get'], url_path='top_youtube_videos')
    def get_top_youtube_videos(self, request):
        data= self.access_layer.fetch_top_youtube_videos()
        data= data.dropna()
        response= data.to_dict(orient='records')
        return JsonResponse(response, safe=False)

