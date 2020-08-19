# Overview

This is a proof of concept for how to integrate a C library with a Node.js application using [node-ffi](https://github.com/node-ffi/node-ffi). The motivation behind it can be, for example, to rely on a ready-made library or an attempt to perform an operation faster. The chosen task for this PoC is to calculate the hash of a given string using [MD5](https://en.wikipedia.org/wiki/MD5). The performance of the approach utilizing a C library and node-ffi is also compared to a simple integration of a JavaScript library.

# Build and run

```
- cleanZombieContainersRebuildAndRun.sh
```

If the container is already running, it will stop before the clean up, then build and spin up the container again.

Both endpoints can be quickly tested using Curl, as follows:

```
 - curl localhost:8080/c?input=mypassword (c library with node-ffi)
 - curl localhost:8080/js?input=mypassword (js library)
```
Results from both endpoints should be the same for any given input.

# End to end test

```
- npm install
- npm test
```

# Performance test

Run the following command for each endpoint and compare the results.

```
- runK6.sh (js|c)
```
 
Number of virtual users and duration for this test can be configured according to [K6 documentation](https://k6.io/docs/getting-started/running-k6).



Note: Keep in mind that both approaches are blocking the event loop, which is not recommneded for heavy calculations. 