// Function Expression

// const tampilNama = function (nama) {
//     return `halo, ${nama}` 
// }

// console.log(tampilNama(`Husnul`))

// Arrow Function
// const tampilNama = (nama) => {return `halo, ${nama}`}
// console.log(tampilNama(`Husnul`));

// const tampilNama = (nama, waktu) => {
//     return `halo ${nama}, selamat ${waktu}`
// }
// console.log(tampilNama(`husnul`, `malam`))

// Implisit Return
// const tampilNama = nama => `halo, ${nama}`;
// console.log(`Husnul`);

// const tampil = () => `hello world`;
// console.log(tampil())

let siswa = [`husnul`, `fikri`]

// let jumlahHuruf = siswa.map (function(nama) {
//     return nama.length;
// })
// console.log(jumlahHuruf);

// const jumlahHuruf = siswa.map(nama => nama.length);
// console.log(jumlahHuruf)

let jumlahHuruf = siswa.map(nama => ({nama : nama, jumlahHuruf : nama.length}));
console.table(jumlahHuruf)