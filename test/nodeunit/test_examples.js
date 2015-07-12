var traceur = require('traceur');

traceur.require.makeDefault(function(filename) {
    return filename.indexOf('node_modules') === -1;
});

module.exports = {

    "Map" : {
        "Test 'map()' on simple non-Promise function": function(test) {

            var example = require('./../../src/Map/PromisifyFunctionExample.js');

            var array = ["a", "b", "c"];
            var expectedTransformedArray = ["c?!", "b?!", "a?!"];

            example.run(array, false, function(transformedArray) {
                test.deepEqual(transformedArray, expectedTransformedArray);
                test.done();
            });
        },

        "Test 'map()' on Promisified Async Function": function(test) {

            var example = require('./../../src/Map/NoAsyncExample.js');

            var array = ["a", "b", "c"];
            var expectedTransformedArray = ["c?!", "b?!", "a?!"];

            example.run(array, false, function(transformedArray) {
                test.deepEqual(transformedArray, expectedTransformedArray);
                test.done();
            });
        },

        "Test 'map()' on Promisified Object with Async Function": function(test) {

            var example = require('./../../src/Map/PromisifyObjectFunctionsExample.js');

            var array = ["a", "b", "c"];
            var expectedTransformedArray = ["c?!", "b?!", "a?!"];

            example.run(array, false, function(transformedArray) {
                test.deepEqual(transformedArray, expectedTransformedArray);
                test.done();
            });
        },

        "Test 'all()' on array of the same Promisified function": function(test) {
            var example = require('./../../src/Collection/All.js');

            var array = ["a", "b", "c"];
            var expectedTransformedArray = ["c?!", "b?!", "a?!"];

            example.run(array, false, function(transformedArray) {
                test.deepEqual(transformedArray, expectedTransformedArray);
                test.done();
            });
        }
    }
};
