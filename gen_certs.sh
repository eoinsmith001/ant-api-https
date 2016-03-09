#!/bin/bash
CERTS_DIR=./certs
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout $CERTS_DIR/nginx.key -out $CERTS_DIR/nginx.crt
