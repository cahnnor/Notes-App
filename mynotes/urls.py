from distutils.command.build import build
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
import os

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('manifest.json', include('api.urls'))
    #re_path('', TemplateView.as_view(template_name='index.html'))
    
]
