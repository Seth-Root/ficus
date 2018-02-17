from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from servicios.models import Publicacion
from servicios.serializers import PublicacionSerializer


from servicios.models import Publicacion
from servicios.serializers import Publicacion
from rest_framework import generics


class PublicacionList(generics.ListCreateAPIView):
    queryset = Publicacion.objects.all()
    serializer_class = PublicacionSerializer


class PublicacionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Publicacion.objects.all()
    serializer_class = PublicacionSerializer

