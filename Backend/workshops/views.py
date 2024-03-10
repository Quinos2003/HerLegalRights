from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.views.generic import View
from django.views.decorators.csrf import csrf_exempt
from .models import Workshop, WorkshopRegistration

class WorkshopListView(View):
    def get(self, request, *args, **kwargs):
        workshops = list(Workshop.objects.values())  # Convert queryset to list of dictionaries
        return JsonResponse({'workshops': workshops})

@csrf_exempt
def register_workshop(request, workshop_id):
    if request.method == 'POST':
        data = request.POST
        workshop = Workshop.objects.get(pk=workshop_id)
        registration = WorkshopRegistration.objects.create(
            workshop=workshop,
            email=data['email'],
            first_name=data['first_name'],
            last_name=data['last_name'],
            phone_number=data['phone_number']
        )
        return JsonResponse({'message': 'Workshop registration successful', 'id': registration.id})
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)

