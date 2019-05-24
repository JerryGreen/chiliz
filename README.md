# [Числитель или Знаменатель](https://chiliz.ru/)

> This repository may look overcomplicated in details. And it is! For the purpose it's done initially, "just to show oddness of the week", – of course its architecture is complicated. It may be much more lean. That's my project I experiment with. I want unified architecture / development flow / etc, so I just play here with some important aspects for me. This helps me with the real projects, big projects.

## Requirements

* NodeJS 11.6.0
* Yarn 1.12.3

## Setup

```
echo '# override envs here' > .env.local
yarn
yarn start
```

## Deploy

`master` branch

```
yarn build
git add .
git commit
git push
```

## Additional info

* [Domains](wiki/domains.md)
