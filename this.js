function f1(){
    this.b=10;
    return this;
}

const f2=()=>{
    this.a=10;
    return this;
};

console.log(f1());