from django.contrib import admin
from . models import Employee

# Register your models here.
class EmployeeAdmin(admin.ModelAdmin):
    list_display = ['first_name','last_name','email','team','job_title']
    lsit_filter = ('title','job','title')
admin.site.register(Employee,EmployeeAdmin)