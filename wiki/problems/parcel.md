# Parcel & Babel

There are extra dependencies in `package.json`:

```
"babel-core": "6.26.3",
"babel-plugin-transform-runtime": "6.23.0",
```

Extra config:

```
.babelrc
```

And overall, it works probably pretty slow because of the babel (not sure, but at least usage of typescript's compiler looks sufficient - but not supported by Parcel)

## Related issues

* [parcel-bundler/parcel/issues/1762](https://github.com/parcel-bundler/parcel/issues/1762#issuecomment-479528764)
