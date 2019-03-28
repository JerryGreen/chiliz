# AWS Lambda chiliz likes

## Requirements

* [aws-cli](https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html)

## Setup

```
yarn
yarn start
```

## Deploy

```
yarn
yarn release
```

## Test

1. `yarn test` to test locally
2. `sls invoke -f getChilizVkLikes -l` after deploy to inspect lambda response

## API

```
https://p7o8ianrwi.execute-api.eu-central-1.amazonaws.com/default/getChilizVkLikes
https://kfp7zu0p86.execute-api.eu-central-1.amazonaws.com/default/getChilizVkLikes (old, no serverless)
```
