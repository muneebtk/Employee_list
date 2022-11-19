from rest_framework.response import Response
from rest_framework.decorators import api_view
from . models import Employee
from . serializer import EmployeeSerializer
from rest_framework import viewsets

# getting all employee


@api_view(['GET'])
def home(request):
    data = Employee.objects.all()
    serializer = EmployeeSerializer(data, many=True)
    return Response(serializer.data)
# Employee CRUD operation


class EmployeeViewSet(viewsets.ModelViewSet):
    serializer_class = EmployeeSerializer
    queryset = Employee.objects.all()
