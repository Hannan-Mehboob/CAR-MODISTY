let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    }

    document.querySelector('#login-btn').onclick = () =>{
        document.querySelector('.login-form-container').classList.toggle('active');
    }

    document.querySelector('#close-login-form').onclick = () =>{
        document.querySelector('.login-form-container').classList.toggle('active');
    }

    window.onscroll = () =>{

        if(window.scrollY > 0){
            document.querySelector('.header').classList.add('active');
        }else{
           document.querySelector('.header').classList.remove('active');
        }

        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }

    window.onload = () =>{

        if(window.scrollY > 0){
            document.querySelector('.header').classList.add('active');
        }else{
           document.querySelector('.header').classList.remove('active');
        }

    }
    
    document.querySelector('.home').onmousemove = (e) =>{

        document.querySelectorAll('.home-parallax').forEach(elm =>{

            let speed = elm.getAttribute('data-speed');

            let x = (window.innerWidth - e.pageX * speed) / 90;
            let y = (window.innerHeight - e.pageY * speed) / 90;

            elm.style.transform = `translateX(${y}px)  translateY(${x}px)`;

        });
    };
    
    document.querySelector('.home').onmouseleave = () =>{

        document.querySelectorAll('.home-parallax').forEach(elm =>{

            elm.style.transform = `translateX(0px)  translateY(0px)`;

        });
    };



    var swiper = new Swiper(".vehicles-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        grabcursor:true,
        centeredSlides: true,
        autoplay:{
            delay: 9500,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
        },
      });

      var swiper = new Swiper(".featured-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        grabcursor:true,
        centeredSlides: true,
        autoplay:{
            delay: 9500,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
        },
      });

      var swiper = new Swiper(".reviews-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        grabcursor:true,
        centeredSlides: true,
        autoplay:{
            delay: 9500,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
        },
      });

      function performSearch(){
        document.getElementById()
      }

var popup = document.getElementById("myPopup");


var btn = document.getElementById("openPopupBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  popup.style.display = "block";
}


span.onclick = function() {
  popup.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}
    