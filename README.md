# Inertia SSR on Falcon

A Rails example app with Falcon, Inertia, and Svelte SSR preconfigured.

The Falcon Webserver enables async concurrency within a single thread, which provides a massive performance boost when compared to Puma, especially when using Inertia SSR, where lots of time is spent waiting on blocking I/O.

Running 500 requests, 250 in parallel:

```
# Puma, launched with bin/rails s
./benchmark.sh
Finished in 11 seconds

# Falcon, launched with bundle exec falcon host
./benchmark.sh
Finished in 0 seconds
```

## Development

Run locally with `foreman start`

## Production

Run with ./bin/server