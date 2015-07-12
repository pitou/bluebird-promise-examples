var traceur = require('traceur');

traceur.require.makeDefault(function(filename) {
    return filename.indexOf('node_modules') === -1;
});

var array = ["1", "2", "3"];

var NoAsyncExample = require('./Map/NoAsyncExample.js');

NoAsyncExample.run(array, true);

var PromisifyFunctionExample = require('./Map/PromisifyFunctionExample.js');

PromisifyFunctionExample.run(array, true);

var PromisifyObjectExample = require('./Map/PromisifyObjectExample.js');

PromisifyObjectExample.run(array, true);
