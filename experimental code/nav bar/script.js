const navSlide = () => {
    const logo = document.querySelector('.logo');
    const nav = document.querySelector('.nav-links');

    logo.addEventListener('click',()=>{
        nav.claslist.toggle('nav-active');
    });
}

navSlide();