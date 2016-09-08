/// <reference path="../index.d.ts" />

import Child1 = require('./child.vue')
// or
import * as Child2 from './child.vue'

// access something to generate code
const d1 = Child1.$data
const d2 = Child2.$data
