var EventEmitter = require("events").EventEmitter;
var domain = require("domain");
var emit_a = new EventEmitter();
var dom_a = domain.create();

dom_a.on('error', function (err) {
    console.log("Error handled by dom_a (" + err.message + ")");
});

dom_a.add(emit_a);
//emit_a.on('error', function (err) {
//    console.log("listener handled this error (" + err.message + ")");
//});

emit_a.emit('error', new Error('Listener handles this')); 
