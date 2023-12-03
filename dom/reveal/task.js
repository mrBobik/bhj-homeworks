const reveal = document.querySelectorAll('.reveal');

const setRevealTimeout = (item) => {
    setTimeout(function() {
        item.classList.add('reveal_active');
    }, 100);
};

reveal.forEach((item) => {
    window.addEventListener('scroll', (event) => {
        if (window.innerHeight > item.getBoundingClientRect().top) {
            setRevealTimeout(item);
        } else {
            item.classList.remove('reveal_active');
        }
    });
});
