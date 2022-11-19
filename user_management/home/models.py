from django.db import models

# Create your models here.


class Employee(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    short_name = models.CharField(max_length=20)
    title = models.CharField(max_length=50)
    email = models.EmailField(max_length=50, unique=True)
    contact = models.IntegerField(unique=True)
    contact_ext = models.CharField(max_length=5)
    join_date = models.DateTimeField(auto_now_add=True)
    image_md = models.ImageField(upload_to='images')
    image_lg = models.ImageField(upload_to='images')
    image_thumbnail = models.ImageField(upload_to='images')
    team=models.CharField(max_length=100)
    job_title=models.CharField(max_length=100)
    last_login=models.DateField(auto_now=True)
    logged_in=models.BooleanField(default=False)

    def __str__(self):
        return self.first_name



