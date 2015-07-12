## bluebird-promise-examples

A bunch of examples that show common cases of asyncronous function execution using the [bluebird](https://github.com/petkaantonov/bluebird) promise library.

All the examples are written using the ES6 syntax.

### Get started
```
npm install
```

This will install of course bluebird, [traceur](https://github.com/google/traceur-compiler/wiki/Getting-Started) and [nodeunit](https://github.com/caolan/nodeunit) to launch test for the examples.

### Usage

To see an example in action just launch:

```
node src/run.js example/path/you/want/to/run
```

e.g.

```
node src/run.js src/Map/PromisifyFunctionExample.js
```

### Examples

This is the list of the examples I've written so far:

* **Map/NoAsync**
* **Map/PromisifyFunction**
* **Map/PromisifyObjectFunctions**
* **Collection/All**

### Todo

* Add some explanation on the examples
* Accept custom input data from the terminal

### Tests

Run tests on the examples with:

```
nodeunit test/nodeunit/test_examples.js
```
