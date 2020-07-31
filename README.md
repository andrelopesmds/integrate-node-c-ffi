# Production

## Install

docker build -t integrate-node-c-ffi .

## Run

docker run --name integrate-node-c-ffi -p 8080:8080 -d integrate-node-c-ffi

# Development

Simply use the script "cleanZombieContainersRebuildAndRun.sh", it will clean up everything and spin up the container again.
