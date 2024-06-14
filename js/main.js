let progs = document.querySelector('.skills');
let spans = document.querySelectorAll('div.prog span');
console.log(progs)
window.onscroll = function () {
    if (window.scrollY >= progs.offsetTop) {
        spans.forEach((span) => {
            span.style.width = span.dataset.prog;
        });
    }
}
//we can specifed the location we want to be started like
// window.onscroll = function () {
//     if (window.scrollY >= progs.offsetTop +100 ){ here after 100 px // -50 befor we reached
//         console.log('well')
//     }
// }

//for active my links after clicked
const navLinks=document.querySelectorAll('.nav-link');
navLinks.forEach(link =>{
    link.addEventListener('click',function() {
        navLinks.forEach(link =>
            link.classList.remove('active'));
        this.classList.add('active');
    })
})
console.log(navLinks)
