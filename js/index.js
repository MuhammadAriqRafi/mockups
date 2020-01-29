const nav = document.querySelector('nav');
const links = document.querySelectorAll('.nav-btn');
const cover = document.querySelector('.cover-container');

const options = {
    rootMargin: "-200px 0px 0px 0px"
};

const coverObserver = new IntersectionObserver(function (entries, coverObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            nav.classList.add('nav-scroll');
            nav.style.transition = 'all .3s';
            links.forEach(a => {
                a.style.color = 'black';
            });
        } else {
            nav.classList.remove('nav-scroll');
            links.forEach(a => {
                a.style.color = 'white';
            });
        }
    });
}, options);

coverObserver.observe(cover);