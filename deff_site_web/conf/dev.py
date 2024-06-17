from .common import *
import os

from dotenv import load_dotenv
load_dotenv()

DEBUG=os.environ.get("DEBUG")
PRODUCTION=os.environ.get("PRODUCTION")
SECRET_KEY=os.environ.get("SECRET_KEY")
ALLOWED_HOSTS=os.environ.get("DJANGO_ALLOWED_HOSTS")


# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

DATABASES = {
    "default": dj_database_url.parse(os.environ.get("DATABASE_URL"))
    # 'default': {
    #     'ENGINE': 'django.db.backends.sqlite3',
    #     'NAME': BASE_DIR / 'db.sqlite3',
    # }
}


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/


STATIC_URL = '/static/'
MEDIA_URL = '/media/'

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
MEDIA_ROOT = os.path.join(BASE_DIR, 'mediafiles')

STATICFILES_DIRS = [
    os.path.join(BASE_DIR,'static'),
    os.path.join(BASE_DIR,'media')
]