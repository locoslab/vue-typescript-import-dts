# vue-typescript-import-dts
TypeScript declaration file that allows using `import` with `*.vue` files. The primary use case is a bundler environment like [Browserify](http://browserify.org/) with [vueify](https://github.com/vuejs/vueify). The file itself consists of 4 lines; this package is just a convenience.

If you are using a TypeScript/vueify setup, there is additionally [vue-typescript-component](https://github.com/locoslab/vue-typescript-component) that allows using decorators to integrate TypeScript classes as Vue.js 2.0 components.

## Usage
This package requires at least TypeScript 2.0 RC.

1. Install: `npm install vue-typescript-import-dts --save-dev`

2. Either include it in the `types` field of `tsconfig.json`

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

```typescript
import * as Child from './child.vue'
// or
const Child = require('./child.vue')
```

Note: There is no type checking or parsing of the `vue` file itself: this project only instructs the TypeScript compiler to treat the result of importing a file with a `.vue` extension as an `any` object.

## Important Caveat
While `import Child from './child.vue'` compiles, it does not generate the required code and `Child` will be `undefined`.

## License
[MIT](http://opensource.org/licenses/MIT)
