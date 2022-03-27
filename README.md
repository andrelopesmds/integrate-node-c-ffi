# Overview

This is a proof of concept for how to integrate a C and a Rust library with a Node.js application using [node-ffi](https://github.com/node-ffi/node-ffi).

The motivation behind it can be, for example, to rely on a ready-made library in one of these languages or an attempt to use a more low level language/module to perform a certain task faster.

The chosen task for this PoC is to calculate the hash of a given string using [MD5](https://en.wikipedia.org/wiki/MD5). The performance is then compared to simply using a nodejs module for calculating the hash

# Build and run

```
- rebuildAndRun.sh
```

The endpoints can be tested using Curl, as follows:

```
 - curl localhost:8080/c?input=password (C library with node-ffi)
 - curl localhost:8080/rust?input=password (Rust library with node-ffi)
 - curl localhost:8080/js?input=password (JS library)
```

Results from these endpoints should be the same for any given input.

# End to end test

```
- npm install
- npm test
```

# Performance test

Run the following command for each endpoint and compare the results.

```
- runK6.sh (js|c|rust)
```
 
Number of virtual users and duration for this test can be configured according to [K6 documentation](https://k6.io/docs/getting-started/running-k6).
