from django.urls import path
from . import views

app_name = 'core'

urlpatterns = [
    path("", views.HomeView.as_view(), name="home"),
    path("about/", views.AboutUsView.as_view(), name="about"),
    path("contact/", views.ContactView.as_view(), name="contact"),
    path("case-studies/", views.CaseStudyView.as_view(), name="case_studies"),
]
