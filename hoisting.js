// let a;
// console.log(typeof a); // undefined
// console.log(a); //reference error

// console.log(typeof b); // undefined
// console.log(b); //reference error

// let a=10;
// var b=100;

// var a=10;

class Avenger{
    constructor(height,weight){
        this.height=height;
        this.weight=weight;
    }
}

var bear=new Avenger();
bear.height=270;
bear.weight=390;
console.log(bear);