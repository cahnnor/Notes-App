from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('notes/', views.getNotes, name="notes"),
    path('notes/create/', views.createNote, name="create-note"),
    path('notes/<str:pk>/update/', views.updateNote, name="update-note"),
    path('notes/<str:pk>/delete/', views.deleteNote, name="delete-note"),
    #re_path('.*/', views.index, name='index'),
    path('notes/<str:pk>/', views.getNote, name="note")
    #path('<path:resource>', TemplateView.as_view(template_name='index.html'))
    #re_path(r'^(?:.*)/?$', views.index)
]