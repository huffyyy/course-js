const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumb = document.querySelector('.thumb');
container.addEventListener('click', function(e) {
    // cek apakah sudah di klik adalah thumb
    if(e.target.className == 'thumb') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function() {
        jumbo.classList.remove('fade');
        }, 500) 
    }
    thumb.forEach(function(thumb) {
        // if (thumb.classList.contains('active') ) {
        //     thumb.classList.remove('active');
        // }
        thumb.className = 'thumb';

    });
    e.target.classList.add('active');
    });
