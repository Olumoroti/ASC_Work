let name = process.argv[2];
let age = process.argv[3];

if(name != undefined && age != undefined){
    console.log("My name is", name, "and I am", age + ".");
} else {
    console.log("Enter a name and an age next time.");
}
