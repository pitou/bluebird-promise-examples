import C from '../Common'

export function run(array, debug, callback)
{
    C.setDebug(debug);

    var Promise = require('bluebird');

    var obj = {
        func: function (a, callback) {
            setTimeout(function () {
                callback(null, a + "?");
            }, 1000);
        }
    };

    Promise.promisifyAll(obj);

    Promise.map(array, function (a) {
        return obj.funcAsync(a);
    })

    .map(C.addExclamationMark)

    .then(C.reverseArray)

    .then(C.done)

    .then(callback);
}
