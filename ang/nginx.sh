#!/bin/bash

docker run --name anginx \
  -v /Users/esmith/Dev/ang-api-https/ang/html:/usr/share/nginx/html:ro \
  -v /Users/esmith/Dev/ang-api-https/ang/nginx.conf:/etc/nginx/conf.d/default.conf:ro \
  -v /Users/esmith/Dev/ang-api-https/ang/certs:/etc/nginx/ssl \
  -p 8080:80 \
  -p 4430:443 \
  -d nginx
