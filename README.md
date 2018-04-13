# vue-typescript-import-dts [![Build Status](https://travis-ci.org/locoslab/vue-typescript-import-dts.svg?branch=master)](https://travis-ci.org/locoslab/vue-typescript-import-dts) [![npm version](https://badge.fury.io/js/vue-typescript-import-dts.svg)](https://badge.fury.io/js/vue-typescript-import-dts)
TypeScript declaration file that allows using `import` with `*.vue` files. The primary use case is a bundler environment like [webpack](https://webpack.js.org/). The file itself consists of 4 lines; this package is just for convenience.

## Usage
This package requires TypeScript 2 and Vue.js 2, which ships with new type definitions in the Vue.js package itself. Both must be installed separately in your project, which allows choosing a suitable version.

1. Install
    * `npm install vue-typescript-import-dts --save-dev`

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

* `import Child from './child.vue'`

Note: TypeScript will not type check, parse, or even verify the existence of the `.vue` file: this project only instructs the TypeScript compiler to assume the import of 'something' that ends with `.vue` succeeds and is a `Vue` object.

## Shameless Plug
If you are using TypeScript 2 together with Vue.js 2, you might also be interested in
* [vue-typescript-jest](https://github.com/locoslab/vue-typescript-jest) to test Vue.js components and TypeScript sources using Jest
* [vue-jest-utils](https://github.com/locoslab/vue-jest-utils) to simplify snapshot testing of Vue.js components using Jest and html2jade

## License
[MIT](http://opensource.org/licenses/MIT)
