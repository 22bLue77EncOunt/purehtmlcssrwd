let searchForm = $(".search-form");
let cart = $(".shopping-cart");
let loginForm = $(".login-form");
let navbar = $(".navbar");
// let slides = $(".home .slides-container).find(".slide");
let slides = $(".home .slides-container").find(".slide");
let index = 0;

$("#search-btn").click(function () {
  searchForm.toggleClass("active");
  cart.removeClass("active");
  loginForm.removeClass("active");
  navbar.removeClass("active");
});

$("#cart-btn").click(function () {
  cart.toggleClass("active");
  searchForm.removeClass("active");
  loginForm.removeClass("active");
  navbar.removeClass("active");
});

$("#login-btn").click(function () {
  loginForm.toggleClass("active");
  searchForm.removeClass("active");
  cart.removeClass("active");
  navbar.removeClass("active");
});

$("#menu-btn").click(function () {
  navbar.toggleClass("active");
  searchForm.removeClass("active");
  cart.removeClass("active");
  loginForm.romoveClass("active");
});

$(window).scroll(function () {
  loginForm.removeClass("active");
  cart.removeClass("active");
  searchForm.removeClass("active");
  navbar.removeClass("active");
});

const next = () => {
  slides.eq(index).removeClass("active");
  index = (index + 1) % slides.length;
  slides.eq(index).addClass("active");
};

const prev = () => {
  slides.eq(index).removeClass("active");
  index = (index - 1 + slides.length) % slides.length;
  slides.eq(index).addClass("active");
};

// function changeSlide(moveTo) {
//   let currentSlide = 0;
//  call function currentSlide - 1
//   if (moveTo >= slides.length) {moveTo = 0;}
//   if (moveTo < 0) {moveTo = slides.length - 1;}

//   slides[currentSlide].classList.toggle("active");
//   slides[moveTo].classList.toggle("active");

//   currentSlide = moveTo;
// }
