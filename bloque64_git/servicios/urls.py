from django.conf.urls import url
from servicios import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
                url(r'^publicaciones/$', views.publicacion_list),
                url(r'^publicaciones/(?P<pk>[0-9]+)/$', views.publicacion_detail),
]
urlpatterns = format_suffix_patterns(urlpatterns)
