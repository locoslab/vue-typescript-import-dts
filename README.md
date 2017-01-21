# vue-typescript-import-dts [![Build Status](https://travis-ci.org/locoslab/vue-typescript-import-dts.svg?branch=master)](https://travis-ci.org/locoslab/vue-typescript-import-dts) [![npm version](https://badge.fury.io/js/vue-typescript-import-dts.svg)](https://badge.fury.io/js/vue-typescript-import-dts)
TypeScript declaration file that allows using `import` with `*.vue` files. The primary use case is a bundler environment like [Browserify](http://browserify.org/) with [vueify](https://github.com/vuejs/vueify). The file itself consists of 5 lines; this package is just for convenience.

## Usage
This package requires TypeScript 2 and Vue.js 2, which ships with new type definitions in the Vue.js package itself. Both must be installed separately in your project, which allows choosing a suitable version.

1. Install: `npm install vue-typescript-import-dts --save-dev`

2. Include it in the `types` field of your `tsconfig.json`

```javascript
{
    "compilerOptions": {
        "types": ["vue-typescript-import-dts"],
...
```

Then, it is possible to `import` a `*.vue` file:

```js
import Child from './child.vue'
```

Note: TypeScript will not type check, parse, or even verify the existence of the `.vue` file: this project only instructs the TypeScript compiler to assume the import of 'something' that ends with `.vue` succeeds and is a `Vue.ComponentOptions<Vue>` object.

## CommonJS Compatibility Syntax
Please not that 3.0 of this package uses ES6 `export default` which also changes the import syntax to the example above. Please use version 2.0 if you prefer the CommonJS compatibility syntax:

```js
import Child = require('./child.vue')
// or
import * as Child from './child.vue'
```

## Shameless Plug
If you are using TypeScript 2 together with Vue.js 2, you might also be interested in
* [vue-typescript-component](https://github.com/locoslab/vue-typescript-component) to use TypeScript classes as Vue.js components
* [vue-typescript-jest](https://github.com/locoslab/vue-typescript-jest) to test Vue.js components and TypeScript sources using Jest
* [vue-jest-utils](https://github.com/locoslab/vue-jest-utils) to simplify snapshot testing of Vue.js components using Jest and html2jade
* [vue-typescript-component-example](https://github.com/locoslab/vue-typescript-component-example) as an example for this package and the projects above that shows a TypeScript/Tsify/Vue.js/Vueify/Pug setup supporting Hot Module Replacement and unit/snapshot testing with Jest


## License
[MIT](http://opensource.org/licenses/MIT)
