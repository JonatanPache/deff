from django.shortcuts import render
from django.views import View
from django.conf import settings

class CaseStudyView(View):
    template_name = 'core/case-details.html'  # Nombre del template

    def get(self, request, *args, **kwargs):
        context = {
            'title': 'Estudio de Caso - Pharmsyn',
            'description': 'Explora cómo Pharmsyn ha transformado el sector farmacéutico con nuestras soluciones avanzadas.',
            'keywords': 'Pharmsyn, software farmacéutico, estudio de caso',
        }
        return render(request, self.template_name, context)
