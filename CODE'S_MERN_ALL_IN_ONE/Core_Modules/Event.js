const events=require("events");

const{EventEmitter}=events;

const eventEmitter =new EventEmitter();

// //register an event
// eventEmitter.on("event-1",function(param1,value,name){
//     console.log("hii there");
//     console.log(param1);
//     console.log(value);
//     console.log(name);
// })


// ////emit or raise an event

// eventEmitter.emit("event-1","by there",10+10,"Shivam");

//**********************//