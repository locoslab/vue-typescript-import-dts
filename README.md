# vue-typescript-import-dts [![Build Status](https://travis-ci.org/locoslab/vue-typescript-import-dts.svg?branch=master)](https://travis-ci.org/locoslab/vue-typescript-import-dts)
TypeScript declaration file that allows using `import` with `*.vue` files. The primary use case is a bundler environment like [Browserify](http://browserify.org/) with [vueify](https://github.com/vuejs/vueify). The file itself consists of 5 lines; this package is just for convenience.

If you are using a TypeScript/vueify setup, there is additionally [vue-typescript-component](https://github.com/locoslab/vue-typescript-component) that allows using decorators to integrate TypeScript classes as Vue.js 2.0 components.

## Usage
This package requires at least Vue.js 2.0.0-rc.5, which introduced new type definitions in the Vue.js package itself, and TypeScript 2.0.2 (the 2.0 RC).

1. Install: `npm install vue-typescript-import-dts --save-dev`

2. Either include it in the `types` field of your `tsconfig.json`

```javascript
{
    "compilerOptions": {
        "types": ["vue-typescript-import-dts"]
...
```

or explicitly in a TypeScript source file

```typescript
/// <reference path="PATH/TO/node_modules/vue-typescript-import-dts/index.d.ts"/>
```

Then, it is possible to `import` a `*.vue` file

```js
import Child = require('./child.vue')
// or
import * as Child from './child.vue'
```

Note: TypeScript will not type check, parse, or even verify the existence of the `vue` file: this project only instructs the TypeScript compiler to assume the import of 'something' that ends with `.vue` succeeds and is a `Vue` object.

## License
[MIT](http://opensource.org/licenses/MIT)
