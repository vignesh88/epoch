# Epoch converter
![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/vignesh88/epoch) ![Docker Cloud Automated build](https://img.shields.io/docker/cloud/automated/vignesh88/epoch) [![Build Status](https://travis-ci.org/vignesh88/epoch.svg?branch=master)](https://travis-ci.org/vignesh88/epoch) ![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/vignesh88/epoch) ![Docker Pulls](https://img.shields.io/docker/pulls/vignesh88/epoch) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/vignesh88/epoch) ![GitHub language count](https://img.shields.io/github/languages/count/vignesh88/epoch) ![GitHub top language](https://img.shields.io/github/languages/top/vignesh88/epoch) ![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/vignesh88/epoch)
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
