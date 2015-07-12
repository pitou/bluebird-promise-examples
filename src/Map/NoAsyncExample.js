import C from '../Common'

export function run(array, debug, callback) {

    C.setDebug(debug);

    var Promise = require('bluebird');

    var func = (a) => {
        return a + "?";
    };

    Promise.map(array, (a) => {
        return func(a);
    })

    .map(C.addExclamationMark)

    .then(C.reverseArray)

    .then(C.done)

    .then(callback);
}
