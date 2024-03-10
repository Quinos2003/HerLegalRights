from django.db import models
from django.core.validators import EmailValidator

# Create your models here.

class Workshop(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    time = models.TimeField()
    venue = models.CharField(max_length=100)
    date = models.DateField()
    image = models.ImageField(upload_to='workshop_images')  # Image field
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Decimal field for price
    duration = models.DurationField()  # Duration field
    link = models.URLField(max_length=200)  # URL field
    status = models.CharField(max_length=20, choices=[('live', 'Live'), ('expired', 'Expired')])  # Choices for status

    def __str__(self):
        return self.title


class WorkshopRegistration(models.Model):
    workshop = models.ForeignKey('Workshop', on_delete=models.CASCADE)
    email = models.EmailField(max_length=254, validators=[EmailValidator()])
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)  # Adjust the max length as needed
    registered_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('workshop', 'email')

    def __str__(self):
        return f'{self.first_name} {self.last_name} ({self.email})'

# image, price , duration, link , status