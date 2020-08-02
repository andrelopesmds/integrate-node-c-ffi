#!/bin/sh

route=$1

if [ $route = "c" ] || [ $route = "js" ]; then
    docker run --env route=$route --net=host -i loadimpact/k6 run - <k6-script.js
else
    echo "Path parameter is required! It must be either 'c' or 'js'"
fi

