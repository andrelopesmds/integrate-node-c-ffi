#!/bin/sh

docker stop integrate-node-c-ffi

docker system prune -f

docker build -t integrate-node-c-ffi .

docker run --name integrate-node-c-ffi -p 8080:8080 -d integrate-node-c-ffi
