
require('./lib/connect').createServer([
    { filter: 'debug' },
    { module: {
        handle: function(err, req, res, next){
            throw new Error('fail');
        }
    }},
    { filter: 'error-handler', showStack: true }
]).listen(3001);