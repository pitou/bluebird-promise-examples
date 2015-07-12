import C from '../Common'

export function run(array, debug, callback) {

    C.setDebug(debug);

    let Promise = require('bluebird');

    let func = (a, callback) => {
        setTimeout(() => {
            callback(null, a + "?");
        }, 1000);
    };

    let funcAsync = Promise.promisify(func);

    // We are going to build an object in which every element key
    // is an element of the original array and its value is a promise
    // that returns the transformed value.

    let promisesObj = {};
    array.forEach((a) => {
        promisesObj[a] = funcAsync(a);
    });

    Promise.props(promisesObj)

    .then((results) => {

        // The argument 'results' is still an object, so we are going to iterate
        // over its element to transform them again;
        // This time we'll return an array of those changed elements.

        return Object.keys(results).map((key) => {
            if (debug) {
                console.log(key + " => " + results[key]);
            }

            return C.addExclamationMark(results[key]);
        });
    })

    .then(C.reverseArray)

    .then(C.done)

    .then(callback);
}
