
const options = {
    root: null,
    threshold: 0.25,
    rootMargin: "-200px 0px 0px 0px"
};

const observer = new IntersectionObserver((entries, observer, nav) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });
}, options)

export default observer;
