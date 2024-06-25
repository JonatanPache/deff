from django_recaptcha.fields import ReCaptchaField
from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(max_length=100)
    email = forms.EmailField()
    phone_number = forms.CharField(max_length=15, required=False)
    msg_subject = forms.CharField(max_length=100)
    message = forms.CharField(widget=forms.Textarea)
    captcha = ReCaptchaField()
