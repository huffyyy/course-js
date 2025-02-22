const p3 = document.querySelector('.p3');
function ubahWarnaP3 () {
    p3.style.backgroundColor = 'lightblue';
}
p3.onclick = ubahWarnaP3;

const p2 = document.querySelector('.p2');
function ubahWarnaP2 () {
    p2.style.backgroundColor = 'lightblue';
}
p2.onclick = ubahWarnaP2;


const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul'); // Menggunakan querySelector untuk mendapatkan elemen tunggal
    const liBaru = document.createElement('li'); // Membuat elemen <li> baru
    const teksLiBaru = document.createTextNode('item baru'); // Membuat teks untuk <li>
    liBaru.appendChild(teksLiBaru); // Menambahkan teks ke dalam <li>
    ul.appendChild(liBaru); // Menambahkan <li> ke dalam <ul>
});

p3.addEventListener('click', function(){
    p3.style.backgroundColor = 'lightbllue';
});
p3.addEventListener('click', function(){
    p3.style.color = 'red';
});


