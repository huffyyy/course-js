const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function() {
    // document.body.style.backgroundColor = '#abebc6';
    // document.body.setAttribute('class', 'hijau-sage');
    document.body.classList.toggle('hijau-sage');
}

const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

const sMerah = document.querySelector('input[name=sMerah]')
const sHijau = document.querySelector('input[name=sHijau]')
const sBiru = document.querySelector('input[name=sBiru]')

sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    document.body.style.backgroundColor = 'rgb('+ r +', 100, 100)'
});

sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +', 100)'
});

sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +', '+ b +')';
});

document.body.addEventListener('mousemove', function(event) {
    const xpos = Math.round((event.clientX / window.innerWidth) *255);
    const ypos = Math.round((event.clientY / window.innerWidth) *255);
    document.body.style.backgroundColor = 'rgb('+ xpos +', '+ ypos +', 100)'
    });