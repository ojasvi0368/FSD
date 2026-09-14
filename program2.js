//Program 2
// Simulate DOM-like event handling in Node.js using events Visualize the event loop using setTimeout, setImmediate, and process.nextTick
// DOM :click , mouseover
const EventEmitter=request("event")
class button extends EventEmitter{
    moudeOver(){

mouseOver(){
    console.log("Mouse is over the button");
    this.emit("mouseOver");
}
const button = new Button();
button.on("click",()=>{
    console.log("click event handled");
});
button.on("Mouseover",()=>{
    console.log("This is mouseover DOM")
})        

    }
}