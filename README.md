# vue-typescript-import-dts
TypeScript declaration file that allows using `import` with `*.vue` files. The primary use case is a bundler environment like [Browserify](http://browserify.org/) with [vueify](https://github.com/vuejs/vueify).

## Usage
This package requires at least TypeScript 2.0 RC.

The package is currently not published in the NPM registry. Therefore, install with

	npm install locoslab/vue-typescript-import-dts

Either include it in the `types` field of `tsconfig.json`

```javascript
{
	"compilerOptions": {
		"types": ["vue-typescript-import-dts"]
...
```

or explicitly in a TypeScript source file

```typescript
/// <reference path="../node_modules/vue-typescript-import-dts/index.d.ts"/>
```

Then, it is possible to `import` `*.vue` files

```typescript
import * as Child from './child.vue'
```

Note: while `import Child from './child.vue'` compiles, it does not generate the required code.

## License
[MIT](http://opensource.org/licenses/MIT)
