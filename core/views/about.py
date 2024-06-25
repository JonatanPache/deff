from django.views import generic
from django.shortcuts import render

class AboutUsView(generic.TemplateView):
    '''
    TemplateView usado para nuestra página de "Acerca de Nosotros".
    
    **Template:**
    
    :template:`core`
    '''
    template_root = "core/"
    template_name = template_root + "about.html"

    def get(self, request):
        context = {
            "company_name": "DEFF: Data Enhance For Fintech",
            "experience_years": 2,
            "description": (
                "En DEFF, nos dedicamos a transformar la industria fintech y de salud digital "
                "mediante el uso de tecnologías avanzadas como machine learning e inteligencia artificial. "
                "Nuestra estrategia se basa en la innovación constante y en la adaptación a las nuevas tendencias "
                "del mercado, asegurando que nuestros clientes siempre reciban soluciones de vanguardia que impulsen "
                "su crecimiento y éxito. Con nuestro enfoque en el análisis de datos y la optimización de procesos, "
                "ayudamos a las empresas a tomar decisiones informadas y a mejorar sus operaciones. En el ámbito de "
                "la salud digital, desarrollamos aplicaciones que no solo facilitan la compra de medicamentos, sino "
                "que también ofrecen recomendaciones personalizadas basadas en los síntomas del usuario, mejorando "
                "así la calidad de vida de nuestros clientes."
            ),
            "about_items":[
            {
                "icon": "bx bx-check",
                "number": "01",
                "text": "Altos estándares de profesionalismo e integridad. Establecimiento de relaciones de trabajo cercanas."
            },
            {
                "icon": "bx bx-check",
                "number": "02",
                "text": "Una forma diferente de pensar, tanto dentro como fuera de la caja. No necesitamos ser los mejores, solo dar lo mejor de nosotros."
            },
            {
                "icon": "bx bx-check",
                "number": "03",
                "text": "Capacidad de aprendizaje continuo y competencia multicultural. Aprovechamos el machine learning para mejorar nuestras soluciones fintech."
            }
        ],
            "mission_items":[
            "Crear Resultados",
            "Pensamiento Innovador",
            "Esperar Más",
            "Mentes Brillantes"
        ],
            "who_we_are_items":[
            "Tenemos todo cubierto",
            "Siempre auténticos",
            "Llamamos la atención",
            "Siempre auténticos"
        ],
            "history_items":[
            "Escucha Activa",
            "Lo Mejor de lo Mejor",
            "Mentes Brillantes",
            "Escucha Activa"
        ]
        }
        return render(request, self.template_name, context)
