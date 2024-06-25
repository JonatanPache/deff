from django.shortcuts import render
from django.views import View
from django.core.mail import send_mail
from django.conf import settings
from core.forms import ContactForm  # Importa el formulario ContactForm

class ContactView(View):
    template_name = 'core/contact.html'  # Nombre del template

    def get(self, request, *args, **kwargs):
        form = ContactForm()  # Instancia del formulario vacío
        context = {
            'form': form,
            'title': 'Contáctanos - DEFF Software',
            'description': 'Bienvenido a nuestra página de contacto. Aquí puedes encontrar información para comunicarte con nosotros.',
            'keywords': 'contacto, dirección, email, teléfono, horario, DEFF Software',
        }
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        form = ContactForm(request.POST)  # Instancia del formulario con datos del POST
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            phone_number = form.cleaned_data['phone_number']
            msg_subject = form.cleaned_data['msg_subject']
            message = form.cleaned_data['message']
            
            # Aquí podrías agregar la lógica para enviar un correo electrónico si es necesario
            # Por ejemplo, usando la función send_mail de Django:
            # send_mail(msg_subject, message, settings.EMAIL_HOST_USER, [settings.EMAIL_HOST_USER])

            # Lógica adicional según tu aplicación

            return render(request, self.template_name, {'success': True})

        return render(request, self.template_name, {'form': form})
