var Bagpipe = require('bagpipe');
// Sets the max concurrency as 100

var bagpipe = new Bagpipe(10);
for (var i = 0; i < 100; i++) {
    bagpipe.push(async, function () {
        // execute asynchronous callback
    });
}