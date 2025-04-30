// Constructor Function 
// function Siswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Siswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `halo ${this.nama}, selamat makan`;
// }

// Siswa.prototype.main = function(jam) {
//     this.energi -= jam;
//     return `halo ${this.nama}, selamat bermain`;
// }

// Siswa.prototype.tidur = function(jam) {
//     this.energi += jam *2;
//     return `halo ${this.nama}, selamat beristirahat`;
// }

// let husnul = new Siswa('husnul', 10);
// let fikri = new Siswa('fikri', 20)


// Versi Class
class Mahasiswa {
    constructor (nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi ;
        return `halo ${this.nama }, selamat makan`;
    }

    main(jam) {
        this.energi -= jam;
        return `halo ${this.nama}, selamat bermain`;
    }
    
    tidur(jam) {
        this.energi += jam *2;
        return `halo ${this.nama}, selamat beristirahat`;
    }
}

let husnul = new Mahasiswa (`husnul`, 10);
let fikri = new Mahasiswa(`fikri`, 15);