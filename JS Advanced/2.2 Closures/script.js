// function init() {
//     // let nama = 'Husnul';
//     // let umur = 18;
//     return function (nama) {
//         console.log(nama);
//         // console.log(umur);
//     }
// }
// let panggilNama = init();
// panggilNama ('Husnul');
// panggilNama ('Fikri');

// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`);
//     }
//  }

//  let selamatPagi = ucapkanSalam(`pagi`);
//  let selamatSiang = ucapkanSalam(`Siang`);
//  let selamatMalam = ucapkanSalam(`Malam`);

// //  selamatMalam(`Husnul`);

// console.dir(selamatMalam(`Husnul`));


let add = (function () {
    let counter = 0;
    return function() {
        return ++counter
    }
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
