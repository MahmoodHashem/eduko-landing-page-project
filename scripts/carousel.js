

const track = document.querySelector('.courses__track');
const prevBtn = document.querySelector('.courses__nav--prev');
const nextBtn = document.querySelector('.courses__nav--next');



let startX = 0; 
let scrollLeft = 0; 
let isDown = false; 



// این ها برای موبایل هستند 

track.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - track.offsetLeft; 
    scrollLeft = track.scrollLeft;
});

track.addEventListener('touchend', ()=> {
    isDown = false;
});

track.addEventListener('touchmove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - track.offsetLeft;
    const walk = (x - startX) * 2;
    track.scrollLeft = scrollLeft - walk;

});


//  برای موس باید جدا کد بزنیم 

track.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
});

track.addEventListener('mouseleave', ()=> {
    isDown = false;
});
track.addEventListener('mouseup', (e) => {
    isDown = false;
});

track.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2;
    track.scrollLeft = scrollLeft - walk;

})

prevBtn.addEventListener('click', ()=> {
    track.scrollLeft -= 200;

})

nextBtn.addEventListener('click', ()=> {
    track.scrollLeft += 200;
})