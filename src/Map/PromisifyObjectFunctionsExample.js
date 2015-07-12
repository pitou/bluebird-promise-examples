import C from '../Common'

export function run(array, debug, callback)
{
    C.setDebug(debug);

    let Promise = require('bluebird');

    let obj = {
        func: (a, callback) => {
            setTimeout(() => {
                callback(null, a + "?");
            }, 1000);
        }
    };

    Promise.promisifyAll(obj);

    Promise.map(array, (a) => {
        return obj.funcAsync(a);
    })

    .map(C.addExclamationMark)

    .then(C.reverseArray)

    .then(C.done)

    .then(callback);
}
