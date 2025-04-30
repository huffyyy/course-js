// Template Literals / Template String

// const nama = `husnul`;
// const umur = 18;
// console.log(`halo, nama saya ${nama}, dan saya berumur ${umur} tahun.`)

// Embedded Expressions
// console.log(`${2 + 2}`);
// console.log(`${alert(`halo`)}`);

// const x = 11
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// HTML Fragments

const mhs = {
    nama : 'husnul fikri',
    umur : 18,
    nrp : '042312302',
    email : 'husnulf@gmail.com'
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);