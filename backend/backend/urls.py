from django.contrib import admin
from django.urls import path, include
from api.views import ContactViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'contact', ContactViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    #path('contact/', ContactViewSet.as_view(), name= 'contact'),
    path('', include(router.urls)),
]