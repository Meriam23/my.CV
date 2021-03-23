document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var scrollpos = window.scrollY; 
var wh = window.innerHeight-50; 
var element = document.querySelector(".crawl"); 

window.addEventListener('scroll', function(){
    if(scrollpos > (element.offsetTop - wh)){
        element.classList.add("onScroll");
    }
});

