# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from django import template
register = template.Library()
from django.http import HttpResponse
import datetime
#def hello(request):
#    text = """<h1>welcome to my app !</h1>"""
#    return HttpResponse(text)

def hello(request):
    return render(request, "epoch_converter/home.html", {})


#def hello(request, number):
#    text = "<h1>welcome to my app number %s!</h1>"% number
#    return HttpResponse(text)

def cut(value, arg):
    """Removes all values of arg from the given string"""
    return value.replace(arg, '')

def convert_to_epoch(dt):
    #epoch = datetime.datetime.utcfromtimestamp(0)
    #return (dt - epoch).total_seconds() * 1000.0
    return dt

register.filter('cut', cut)
register.filter('convert_to_epoch', convert_to_epoch)
