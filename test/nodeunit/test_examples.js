var traceur = require('traceur');

traceur.require.makeDefault(function(filename) {
    return filename.indexOf('node_modules') === -1;
});

module.exports = {

    "Map" : {
        "Test Map": function(test) {

            var example = require('./../../src/Map/PromisifyFunctionExample.js');

            var array = ["a", "b", "c"];
            var expectedTransformedArray = ["c?!", "b?!", "a?!"];

            example.run(array, false, function(transformedArray) {
                test.deepEqual(transformedArray, expectedTransformedArray);
                test.done();
            });
        },

        "Test Map With Promisified Async Function": function(test) {

            var example = require('./../../src/Map/NoAsyncExample.js');

            var array = ["a", "b", "c"];
            var expectedTransformedArray = ["c?!", "b?!", "a?!"];

            example.run(array, false, function(transformedArray) {
                test.deepEqual(transformedArray, expectedTransformedArray);
                test.done();
            });
        },

        "Test Map With Promisified Object With Async Function": function(test) {

            var example = require('./../../src/Map/PromisifyObjectExample.js');

            var array = ["a", "b", "c"];
            var expectedTransformedArray = ["c?!", "b?!", "a?!"];

            example.run(array, false, function(transformedArray) {
                test.deepEqual(transformedArray, expectedTransformedArray);
                test.done();
            });
        }
    }
};
