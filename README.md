# vue-typescript-import-dts [![Build Status](https://travis-ci.org/locoslab/vue-typescript-import-dts.svg?branch=master)](https://travis-ci.org/locoslab/vue-typescript-import-dts) [![npm version](https://badge.fury.io/js/vue-typescript-import-dts.svg)](https://badge.fury.io/js/vue-typescript-import-dts)
TypeScript declaration file that allows using `import` with `*.vue` files. The primary use case is a bundler environment like [Browserify](http://browserify.org/) with [vueify](https://github.com/vuejs/vueify). The file itself consists of 5 lines; this package is just for convenience.

## CommonJS vs. ES6 modules
There are two current versions: version 2.x for a CommonJS environment, e.g., Browserify/vueify and version 3.x for an ES6 environment that uses `export default`.

## Usage
This package requires TypeScript 2 and Vue.js 2, which ships with new type definitions in the Vue.js package itself. Both must be installed separately in your project, which allows choosing a suitable version.

1. Install
    * For ES6 modules: `npm install vue-typescript-import-dts --save-dev`
    * For CommonJS: `npm install vue-typescript-import-dts@2 --save-dev`

2. Import (one of):
    * Import this module before the import of a `.vue` file: `import 'vue-typescript-import-dts'`
    * ... or include it in the `types` field of your `tsconfig.json` to globally allow using import with `.vue` files in your project:

```javascript
{
    "compilerOptions": {
        "types": ["vue-typescript-import-dts"],
...
```

Then, it is possible to `import` a `*.vue` file:

* For ES6 modules:  `import Child from './child.vue'`
* For CommonJS, one of:
    - `import Child = require('./child.vue')`
    - `import * as Child from './child.vue'`

Note: TypeScript will not type check, parse, or even verify the existence of the `.vue` file: this project only instructs the TypeScript compiler to assume the import of 'something' that ends with `.vue` succeeds and is a `Vue.ComponentOptions<Vue>` object.

## Shameless Plug
If you are using TypeScript 2 together with Vue.js 2, you might also be interested in
* [vue-typescript-component](https://github.com/locoslab/vue-typescript-component) to use TypeScript classes as Vue.js components
* [vue-typescript-jest](https://github.com/locoslab/vue-typescript-jest) to test Vue.js components and TypeScript sources using Jest
* [vue-jest-utils](https://github.com/locoslab/vue-jest-utils) to simplify snapshot testing of Vue.js components using Jest and html2jade
* [vue-typescript-component-example](https://github.com/locoslab/vue-typescript-component-example) as an example for this package and the projects above that shows a TypeScript/Tsify/Vue.js/Vueify/Pug setup supporting Hot Module Replacement and unit/snapshot testing with Jest

## License
[MIT](http://opensource.org/licenses/MIT)
