#!/bin/sh

route=$1

if [ $route = "c" ] || [ $route = "js" ] || [ $route = "rust" ]; then
    docker run --env route=$route --net=host -i loadimpact/k6 run - <performance-test/k6-script.js
else
    echo "Path parameter is required! It must be 'c', 'js' or 'rust'"
fi

