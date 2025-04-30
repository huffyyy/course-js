// ambil semua elemen video

const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang "jAVASCRIPT LANJUTAN"

let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing-masing video

.map(item => item.dataset.duration)

// ubah durasi menjadi int, lalu ubah menit menjadi detik

.map(waktu => {
    const parts = waktu.split(':').map(part =>  parseFloat(part));
    return (parts[0] * 60) + parts[1];
})

// jumlahkan semua detik

.reduce((total, detik) => total + detik);

// ubah format jadi jam menit detik
const jam = Math.floor (jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut/60);
const detik = jsLanjut - menit * 60;

// simpan di DOM

const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;

const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;

const pJumlVideo = document.querySelector('.jumlah-video');
pJumlVideo.textContent = `${jmlVideo} video.`


console.log(jmlVideo);


