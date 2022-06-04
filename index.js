// let recipie={
//     items:["butter","Paneer"],
//     cook:function(){
//         console.log(`cooking ${this.items[0]}+${this.items[1]}`);

//     },
// }
// recipie.cook();

// class Person{
//     constructor(n){
//         this.name=n;

//     }
//     print() {
//         console.log(this.name)
//     }
// }
// let p1=new Person("Anurag");
// console.log(p1)


//Stack


// class Stack{
//     constructor(){
//         this.length=0;
//         this.stack=[];
//     }



//     push(el){
//         this.stack[this.length]=el;
//         this.length++;
        
//     }
//     pop(){
//        this.stack.pop()
//        this.length--;
//     }

//     //peek show the last element
//     peek(){
//         return this.stack[this.length-1];

//     }
// }

// let s1=new Stack();
// s1.push(1);
// s1.push(2);
// s1.push(10)
// // s1.pop()

// console.log(s1.peek());
// console.log(s1)

//Inheritance

//Object.create(),prototype inheritance


class Mobile{ //Blueprint
    constructor(b,bt){
this.brand=b;
this.calling=true;
this.battery=bt;
    }
}
let m1=new Mobile('iPhone',3000);
console.log(m1)

class SmartPhone extends Mobile{
    constructor(b,bt,c,s){

        super(b,bt);
        this.camera=c;
        this.screen=s;


    }
}
let m2=new SmartPhone("iphone",5000,"20px","6inch")
console.log(m2)