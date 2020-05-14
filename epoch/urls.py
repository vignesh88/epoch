"""epoch URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin

from epoch_converter import views
#urlpatterns = patterns(
#    url(r'^admin/', include(admin.site.urls) ),
#    url(r'^epoch_converter/',' epoch_converter.views.hello', name ='epoch_converter')
#)

urlpatterns = [
    url(r'^$', views.index2, name='epoch'),
    url(r'^tools/epochconverter/$', views.index2, name='epoch'),
    url(r'^comments$', views.index2, name='comments'),
    url(r'^tools/epochconverter/comments$', views.index2, name='comments'),
    url(r'^epoch_faq.html$', views.index2, name='faq'),
    url(r'^tools/epochconverter/epoch_faq.html$', views.index2, name='faq'),
    url(r'^simple_epochtodate.html$', views.index2, name='bingmeta'),
    url(r'^tools/epochconverter/simple_epochtodate.html$', views.index2, name='bingmeta'),
    url(r'^simple_datetoepoch.html$', views.index2, name='bingmeta'),
    url(r'^tools/epochconverter/simple_datetoepoch.html$', views.index2, name='bingmeta'),
#    url(r'^admin/', admin.site.urls, name='admin'),
#    url(r'^epoch_converter/$', views.index2, name='epoch'),
#    url(r'^epoch_converter/comments$', views.index2, name='epoch'),
]

