[![npm (scoped)](https://img.shields.io/npm/v/@thingmate/wot-scripting-api.svg)](https://www.npmjs.com/package/@thingmate/wot-scripting-api)
![npm](https://img.shields.io/npm/dm/@thingmate/wot-scripting-api.svg)
![NPM](https://img.shields.io/npm/l/@thingmate/wot-scripting-api.svg)
![npm type definitions](https://img.shields.io/npm/types/@thingmate/wot-scripting-api.svg)

## @thingmate/wot-scripting-api


## 📦 Installation

```bash
yarn add @thingmate/wot-scripting-api
# or
npm install @thingmate/wot-scripting-api --save
```

This library supports:

- **common-js** (require): transpiled as es2015, with .cjs extension, useful for old nodejs versions
- **module** (esm import): transpiled as esnext, with .mjs extension (requires node resolution for external packages)

In a **node** environment the library works immediately (no extra tooling required),
however, in a **browser** environment, you'll probably need to resolve external imports thought a bundler like
[snowpack](https://www.snowpack.dev/),
[rollup](https://rollupjs.org/guide/en/),
[webpack](https://webpack.js.org/),
etc...
or directly using [skypack](https://www.skypack.dev/):
[https://cdn.skypack.dev/@thingmate/wot-scripting-api](https://cdn.skypack.dev/@thingmate/wot-scripting-api)
