from django.forms import widgets
from rest_framework import serializers
from servicios.models import Publicacion
    
    


class PublicacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publicacion
        fields = ('id', 'title', 'cuerpo', 'evaluado' , 'autor', 'poted_steemit')
