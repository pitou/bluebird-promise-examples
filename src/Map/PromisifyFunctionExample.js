import C from '../Common'

export function run(array, debug, callback)
{
    C.setDebug(debug);

    var Promise = require('bluebird');

    var func = function (a, callback) {
        setTimeout(function () {
            callback(null, a + "?");
        }, 1000);
    };

    var funcAsync = Promise.promisify(func);

    Promise.map(array, function (a) {
        return funcAsync(a);
    })

    .map(C.addExclamationMark)

    .then(C.reverseArray)

    .then(C.done)

    .then(callback);
}
