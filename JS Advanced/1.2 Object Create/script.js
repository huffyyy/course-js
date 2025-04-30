
const methodSiswa = {
    makan : function(porsi) {
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan!`)
    },

    main : function(jam) {
        this.energi -= jam;
        console.log(`halo ${this.nama}, selamat main`)
    },

    tidur : function(jam) {
        this.energi += jam *2;
        console.log(`halo ${this.nama}, selamat tidur`)
    }


};
function Siswa(nama, energi) {
    let siswa = Object.create(methodSiswa);
    siswa.nama = nama;
    siswa.energi = energi;

    return siswa;
}

let husnul = Siswa('husnul', 10);
let fikri = Siswa('fikri', 20)