from django.urls import path
from .views import WorkshopListView, register_workshop

app_name = 'workshops'

urlpatterns = [
    path('', WorkshopListView.as_view(), name='workshop-list'),
    path('register/<int:workshop_id>/', register_workshop, name='register-workshop'),
]
