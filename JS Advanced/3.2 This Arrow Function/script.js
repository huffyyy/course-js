// Konsep this pada Arrow Function

// Constructur Function
// const Mahasiswa = function() {
//     this.nama = `husnul`;
//     this.umur = 18;
//     this.sayHello = function () {
//         console.log(`Halo nama saya ${this.nama}, umur saya ${this.umur}`); 
//     }
// }

// const husnul = new Mahasiswa();

// Arrow Function 
// const Mahasiswa = function() {
//     this.nama = `husnul`;
//     this.umur = 18;
//     this.sayHello = () => {
//         console.log(`Halo nama saya ${this.nama}, umur saya ${this.umur}`); 
//     }
// }

// const husnul = new Mahasiswa();

// Object Literal
// const mhs1 = { 
//     nama: 'husnul',
//     umur: 18,
//     sayHello: () => {
//         console.log(`Halo nama saya ${this.nama}, umur saya ${this.umur}`); 
//     }
// }

    // const Mahasiswa = function() {
    //     this.nama = `husnul`;
    //     this.umur = 18;
    //     this.sayHello = function () {
    //         console.log(`Halo nama saya ${this.nama}, umur saya ${this.umur}`); 
    //     }

    //     setInterval(() => {
    //         console.log(this.umur++);
    //     }, 500);
    // }

    // const husnul = new Mahasiswa();

    const box = document.querySelector('.box');

    box.addEventListener('click', function () {
        let satu = 'size';
        let dua = 'caption';
    
        if (this.classList.contains(satu)) {
            [satu, dua] = [dua, satu];
        }
    
        this.classList.toggle(satu);
        setTimeout(() => {
            this.classList.toggle(dua);
        }, 600);
    });
    