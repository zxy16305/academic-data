var log = console.log;

console.log = function(){
    log.apply(console, [Date().toString()].concat(...arguments));
};