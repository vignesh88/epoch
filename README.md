# Epoch converter
![epoch](screenshot_epoch.png)

## Installation
```
#git clone https://github.com/vignesh88/epoch.git
#cd epoch/
#python manage.py runserver 0.0.0.0:8002
```

## Alternate installation using docker

```
# curl https://raw.githubusercontent.com/vignesh88/epoch/master/docker-compose.yaml --output docker-compose.yaml
# sudo docker-compose up
Creating network "epochsrc_default" with the default driver
Creating epochsrc_epoch_1 ... 
Creating epochsrc_epoch_1 ... done
Attaching to epochsrc_epoch_1
epoch_1  | Watching for file changes with StatReloader
epoch_1  | Performing system checks...
epoch_1  | 
epoch_1  | System check identified no issues (0 silenced).
epoch_1  | May 14, 2020 - 10:42:24
epoch_1  | Django version 3.0.6, using settings 'epoch.settings'
epoch_1  | Starting development server at http://0.0.0.0:8002/
epoch_1  | Quit the server with CONTROL-C.
```

> Open your browser and view the application at http://localhost:8002
