          
from django.http import JsonResponse
from django.views import View
from google.cloud import dialogflow
import os
import json

# Configuración de credenciales de Dialogflow
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = settings.DIALOGFLOW_CREDENTIALS

class DialogflowView(View):

    def post(self, request, *args, **kwargs):
        # Obtener el texto del mensaje del usuario desde la solicitud POST
        user_message = request.POST.get('message')

        # Inicializar cliente de Dialogflow
        session_client = dialogflow.SessionsClient()
        session = session_client.session_path(settings.DIALOGFLOW_PROJECT_ID, 'unique_session_id')

        # Crear solicitud a Dialogflow
        text_input = dialogflow.TextInput(text=user_message, language_code=settings.DIALOGFLOW_LANGUAGE_CODE)
        query_input = dialogflow.QueryInput(text=text_input)

        # Obtener respuesta de Dialogflow
        response = session_client.detect_intent(session=session, query_input=query_input)

        # Procesar la respuesta de Dialogflow
        fulfillment_text = response.query_result.fulfillment_text

        # Devolver la respuesta como JSON
        return JsonResponse({'response': fulfillment_text})
