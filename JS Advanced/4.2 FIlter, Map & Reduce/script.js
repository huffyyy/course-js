const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Mencari angka >= 3
// for
// const newAngka = [];
// for(let i = 0; i < angka.length; i++) {
//     if(angka[i]>= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// filter
//  const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

// Map
// Kalikan semua angka dengan 3
// const newAngka = angka.map(a => a *3);
// console.log(newAngka);

// Reduce 
// Jumlah seluruh elemen pada array
// 6 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 6);
// console.log(newAngka);

// Method chaining
// Cari angka > 5
// Kalikan 3
// Jumlahkan

const hasil = angka.filter(a => a > 5) // 8, 9, 9
.map(a => a * 3) //24, 27, 27
.reduce((acc, cur) => acc + cur); //78
console.log(hasil);
