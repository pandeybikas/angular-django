from rest_framework.routers import DefaultRouter
from django.urls import path,include
from . import views

router=DefaultRouter()
router.register(r"book/list", views.AllProjectView, basename='all_books')

urlpatterns = [
    path('api/', include(router.urls))
]
