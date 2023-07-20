##### For importing and exporting cpntent in javascript files different methods are used.
1)
let we index.js file
```
export let name='abc'
```
In app.js file
```
import {name} from './index.js'
```
2)
###### Exporting using default keyword
In index.js file
```
default export 'abc'
```
In app.js file
```
import name from './index.js'
```
3)
###### For importing multile content we use
```
default export 'abc'
export let apiKey='xyz23lflf'
export let xyz='xyz
```
```
import {apiKey,xyz} from './index.js'
```
or
```
import * as index from './index.js'
```


