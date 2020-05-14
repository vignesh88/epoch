# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.template import Context, Template, loader
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime
import pytz
import json
import os
from epoch.settings import BASE_DIR

@csrf_exempt
def index2(request):
    get_url = str(request.get_full_path)
    if request.is_ajax():
        epoch_to_convert = str(request.POST['epoch_to_convert'])
        if not "datetoepoch" in (epoch_to_convert):
            epoch_to_convert = int(epoch_to_convert)
            tz_to_convert = str(request.POST['tz_to_convert'])
            tz = pytz.timezone(tz_to_convert)
            dt = datetime.fromtimestamp(epoch_to_convert, tz)
            data = {}
            data["vara0"] = dt.strftime('%a,%b %d,%Y, %H:%M:%S %Z%z')
            tz_file_db = os.path.join(
                BASE_DIR, 'epoch_converter/static/epoch/css/epoch_timezone.txt')
            with open(tz_file_db) as f:
                content = f.readlines()
                content_1 = [x.strip() for x in content]
                for tz_to_convert, i in zip(content_1, range(1, 337)):
                    tz_to_convert = str(tz_to_convert)
                    tz = pytz.timezone(tz_to_convert)
                    dt = datetime.fromtimestamp(epoch_to_convert, tz)
                    abc = "vara%d" % (i)
                    data[abc] = dt.strftime('%a,%b %d,%Y, %H:%M:%S %Z%z')
            r = json.dumps(data)
            data = json.loads(r)
            return JsonResponse(data, safe=False)
        elif "datetoepoch" in (epoch_to_convert):
            time_to_convert = str(request.POST['time_to_convert'])
            tz_to_convert = str(request.POST['tz_to_convert'])
            tz = pytz.timezone(tz_to_convert)
            tz_America_New_York_UTC_0500p = pytz.timezone('America/New_York')
            time_format = '%a,%b %d,%Y, %I:%M:%S %p'
            datetime_object_tz = datetime.strptime(
                time_to_convert, time_format)
            dt_with_tz = tz.localize(datetime_object_tz, is_dst=None)
            dt_with_tz_America_New_York_UTC_0500p = tz_America_New_York_UTC_0500p.localize(
                datetime_object_tz, is_dst=None)
            dt_with_tz_epoch = (
                dt_with_tz - datetime(1970, 1, 1, tzinfo=pytz.utc)).total_seconds()
            dt_with_itz_America_New_York_UTC_0500p_epoch = (
                dt_with_tz_America_New_York_UTC_0500p - datetime(1970, 1, 1, tzinfo=pytz.utc)).total_seconds()
            data = {}
            data["vara0"] = dt_with_tz_epoch
            tz_file_db = os.path.join(
                BASE_DIR, 'epoch_converter/static/epoch/css/epoch_timezone.txt')
            with open(tz_file_db) as f:
                content = f.readlines()
                content_1 = [x.strip() for x in content]
                for tz_to_convert, i in zip(content_1, range(1, 337)):
                    tz_to_convert = str(tz_to_convert)
                    tz = pytz.timezone(tz_to_convert)
                    datetime_object_tz = datetime.strptime(
                        time_to_convert, time_format)
                    dt_with_tz = tz.localize(datetime_object_tz, is_dst=None)
                    dt_with_tz_epoch = (
                        dt_with_tz - datetime(1970, 1, 1, tzinfo=pytz.utc)).total_seconds()
                    abc = "vara%d" % (i)
                    data[abc] = dt_with_tz_epoch
            r = json.dumps(data)
            data = json.loads(r)
            return JsonResponse(data, safe=False)
    elif "comments" in (get_url):
        template = loader.get_template('epoch_converter/home.html')
        context = {"var_comments_page": "True"}
        return HttpResponse(template.render(context, request))
    elif "BingSiteAuth" in (get_url):
        template = loader.get_template('epoch_converter/BingSiteAuth.xml')
        context = {"var_bing_page": "True"}
        return HttpResponse(template.render(context, request))
    elif "epoch_faq" in (get_url):
        template = loader.get_template('epoch_converter/home.html')
        context = {"var_epoch_faq_page": "True"}
        return HttpResponse(template.render(context, request))
    elif "simple_epochtodate" in (get_url):
        template = loader.get_template('epoch_converter/home.html')
        context = {"var_simple_e2d_page": "True"}
        return HttpResponse(template.render(context, request))
    elif "simple_datetoepoch" in (get_url):
        template = loader.get_template('epoch_converter/home.html')
        context = {"var_simple_d2e_page": "True"}
        return HttpResponse(template.render(context, request))
    else:
        template = loader.get_template('epoch_converter/home.html')
        abc = request.get_full_path()
        context = {"somevariable": abc}
        return HttpResponse(template.render(context, request))