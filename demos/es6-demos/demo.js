// this.id = 'test';
// const thisDemo = {

//     funcA: function () {
//         console.log('funcA', this)
//     },

//     funcB: () => {
//         console.log('funcB', this)
//     }
// }

// thisDemo.funcA(); //this will represent the thisDemo object.
// thisDemo.funcB();

// function Person() {
//     this.age = 0;
//     setInterval(function growUp(){
//         this.age++;
//         console.log(this.age);
//     }, 1000);
// }

// function Person() {
//     this.age = 0;
//     setInterval(()=>{
//         this.age++;
//         console.log(this.age);
//     }, 1000);
// }
// var p = new Person();


let numbers = [1,2,3,4];
[a,b,...data]= numbers;

console.log(a,b);
console.log(data);