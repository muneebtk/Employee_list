from django.urls import path,include
from . import views
from home.views import EmployeeViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'employee', EmployeeViewSet, basename='employee')
urlpatterns = router.urls

urlpatterns=[
    path('',views.home),
    path('', include(router.urls)),
]
