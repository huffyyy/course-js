// Execution Context, Hoisting & Scope

// console.log(nama);
// var nama = `husnul`;

// Creation phase pada Global Context
// nama var = undifined
// nama function = fn()
// hoisting(menaikan)
// window = global object
// this = window

// Execution phase


// var nama = `husnul`;
// var umur = 18;

// console.log(sayHello());

// function sayHello() {
//     return `halo nama saya ${this.nama}, saya berumur ${this.umur} tahun`;
// }

// var nama = 'husnul fikri';
// var username = 'husnulfk';

// function cetakURL (username) {
//     var instagramURL = 'http://instagram.com/'
//     return instagramURL + username;
// }

// console.log(cetakURL(`bbbbne_`));

// function a() {
// console.log (`ini a`); 
//     function b(){
//     console.log(`ini b`) 
//         function c(){
//         console.log(`ini c`) 
//         } 
//         c();
//     } 
//     b();
// }
// a();

function satu() {
    var nama = `husnul`
    console.log(nama);
}

function dua() {
    console.log(nama)
}

console.log(nama);
var nama = `erik`;
satu();
dua(`doddy`);
console.log nama