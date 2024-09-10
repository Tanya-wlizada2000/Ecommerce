from django.db import models

# Create your models here.

from django.db import models


# Create your models here.
class ContactForm(models.Model):
    name = models.CharField(max_length=30)
    email = models.CharField(max_length=50)
    phone = models.CharField(max_length=15)
    describe = models.TextField(blank=True, null=True)
    create_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'Consult'

