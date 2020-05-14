# Epoch converter
![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/vignesh88/epoch) ![Docker Cloud Automated build](https://img.shields.io/docker/cloud/automated/vignesh88/epoch)
![epoch](screenshot_epoch.png)

## Installation
```
#git clone https://github.com/vignesh88/epoch.git
#cd epoch/
#python manage.py runserver 0.0.0.0:8002
```

## Alternate installation using docker

```
#sudo docker run -d -p 8002:8002 --name epoch vignesh88/epoch python epoch/manage.py runserver 0.0.0.0:8002
```

> Open your browser and view the application at http://localhost:8002
