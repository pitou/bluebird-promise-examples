var traceur = require('traceur');

traceur.require.makeDefault(function(filename) {
    return filename.indexOf('node_modules') === -1;
});

if (typeof process.argv[2] !== "string") {
    throw 'Error: empty example file name';
}

var array = ['1', '2', '3'];

try {
    var modulePath = './' + process.argv[2].replace(/^src\//, '');

    console.log('\nRunning: ' + modulePath + '\n');

    console.log('Input data: ' + array.toString() + '\n');

    var example = require(modulePath);

    example.run(array, true);
} catch(e) {
    throw 'Error: ' + e.toString();
}
