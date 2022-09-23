const newman = require('newman'); // require newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./PetStore.postman_collection.json'),
    reporters: 'html',
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!');
}).on('start', function (err, args) { // on start of run, log to console
    console.log('running a collection...');
}).on('done', function (err, summary) {
    if (err || summary.error) {
        console.error('collection run encountered an error.');
    }
    else {
        console.log('collection run completed!!!!!!!!!!!!.');
    }
});