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

    let functions = [];
    array.forEach((a) => {
        functions.push(funcAsync(a));
    });

    Promise.all(functions)

    .map(C.addExclamationMark)

    .then(C.reverseArray)

    .then(C.done)

    .then(callback);
}
