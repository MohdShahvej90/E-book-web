document.addEventListener('click', function () {
    var loginContent = document.getElementById('loginContent');
    var overlay = document.getElementById('overlay');
    var loginButton = document.getElementById('loginButton'); // Assuming loginButton is the button that triggers the login form

    function showLogin() {
        loginContent.style.top = '0';
        overlay.style.display = 'block';
        overlay.style.transition = 'transform 0.3s ease-in-out';
        document.body.style.overflow = 'hidden'; // Disable scrolling while login form is displayed
    }

    function hideLogin() {
        loginContent.style.top = '-100%';
        overlay.style.display = 'none';
        overlay.style.transition = 'transform 0.3s ease-in-out';
        document.body.style.overflow = 'auto'; // Enable scrolling when login form is hidden
    }

    if (loginButton) {
        loginButton.addEventListener('click', () => {
            showLogin();
        });
    }

    // Event listener to hide login form when clicking the close button
    var loginClose = document.getElementById('loginClose');
    if (loginClose) {
        loginClose.addEventListener('click', () => {
            hideLogin();
        });
    }

    // Event listener to hide login form when clicking on the overlay
    overlay.addEventListener('click', () => {
        hideLogin();
    });
});

document.addEventListener('click', function () {
    var searchContent = document.getElementById('SearchContent');
    var overlay = document.getElementById('overlay');
    var searchButton = document.getElementById('searchButton'); // Assuming loginButton is the button that triggers the login form

    function showSearch() {
        searchContent.style.top = '0';
        overlay.style.display = 'block';
        overlay.style.transition = 'transform 0.3s ease-in-out';
        document.body.style.overflow = 'hidden'; // Disable scrolling while login form is displayed
    }

    function hideSearch() {
        searchContent.style.top = '-100%';
        overlay.style.display = 'none';
        overlay.style.transition = 'transform 0.3s ease-in-out';
        document.body.style.overflow = 'auto'; // Enable scrolling when login form is hidden
    }

    if (searchButton) {
        searchButton.addEventListener('click', () => {
            showSearch();
        });
    }

    // Event listener to hide login form when clicking the close button
    var searchClose = document.getElementById('searchClose');
    if (searchClose) {
        searchClose.addEventListener('click', () => {
            hideSearch();
        });
    }

    // Event listener to hide login form when clicking on the overlay
    overlay.addEventListener('click', () => {
        hideSearch();
    });
});




//home swiper

let swiperHome = new Swiper('.home-swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }

});

// shadow header 
let shadowHeader = () => {
    let header = document.getElementById('headerId');
    window.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header')

}

shadowHeader()
window.addEventListener('scroll', shadowHeader)



// featured swiper

let swiperFeatured = new Swiper('.featured-swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },




    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }

});

// New Swiper 
let swiperNew = new Swiper('.new-swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',


    breakpoints: {
        1150: {
            slidesPerView: 3,
        }
    }

});

// swipper testimonial

let swiperTestimonial = new Swiper('.testimonial-swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',


    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,
        }
    }

});





// Dark Light Theme







let changeTheme = document.querySelector('.change-theme');

let lightTheme = document.getElementById('sun');
let darkTheme = document.getElementById('themeButton');
scrollUpButton = document.getElementById('scrollUp')

// Function to toggle theme
let toggleTheme = () => {
    let body = document.body;
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme');
        scrollUpButton.classList.add('dark-theme');

    } else {
        localStorage.removeItem('theme');
        scrollUpButton.classList.remove('dark-theme');
    }
}

// Event listener for moon icon
darkTheme.addEventListener('click', () => {
    toggleTheme();
    darkTheme.style.display = 'none';
    lightTheme.style.display = 'inline';
});

// Event listener for sun icon
lightTheme.addEventListener('click', () => {
    toggleTheme();
    darkTheme.style.display = 'inline';
    lightTheme.style.display = 'none';
});


window.onload = () => {
    let savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-theme') {
        document.body.classList.add('dark-theme');
        scrollUpButton.classList.add('dark-theme');
        darkTheme.style.display = 'none';
        lightTheme.style.display = 'inline';
    }
}



// scroll reveal animation


let sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // animation repeat
    // reset: true, 
})

sr.reveal(`.home-data, .featured-container, .new-container,
            .join-data, .testimonial-container, footer`)
sr.reveal(`.home-imgs`, { delay: 300 })
sr.reveal(`.service-card`, { interval: 100 })
sr.reveal(`.discount-data`, { origin: 'left' })
sr.reveal(`.discount-images`, { origin: 'right' })





//when the navbar scrolling show active links js // scroll up


let navLinks = document.querySelectorAll('.nav-link2');

//highlight ative link
let highlightActiveLinks = () => {
    //loop pn each sections

    document.querySelectorAll('section').forEach(section => {
        //get the top postion of the sec

        let sectionTop = section.offsetTop - 100;

        // console.log("section id :", section.getAttribute('id'));
        // console.log("section top :", sectionTop);
        // console.log("widow scrollY :", window.scrollY);


        //check if the current scroll with the sec

        if (window.scrollY >= sectionTop) {
            //get the section id
            let sectionId = section.getAttribute('id');
            //loop on nav link
            navLinks.forEach(link => {
                //remove
                link.classList.remove('active-link');

                //add check if the active withe the current sec

                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active-link');
                }

            });
        }

    });
};

//call the fun
window.addEventListener('DOMContentLoaded', highlightActiveLinks);
window.addEventListener('scroll', highlightActiveLinks);






//  Explor button action

let exploreBtn = document.getElementById('explorButton');

let targetSec = document.getElementById('featured');

let scrollToSec = () => {
    let offsetTop = targetSec.offsetTop;

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
};

// exploreBtn.addEventListener('click', scrollToSec)





