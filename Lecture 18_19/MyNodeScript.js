//var a = "usman";
///debugger;
//console.log(a);

var EventEmitter = require("events").EventEmitter;

var eventEmitter = new EventEmitter();

eventEmitter.on("abc", () => { console.log("event called") });

eventEmitter.emit("abc");


