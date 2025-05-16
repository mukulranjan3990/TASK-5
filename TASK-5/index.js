{
let timer;
let slideIndex = 1;
showSlides(slideIndex);

function autoSlide() {
  slideIndex++;
  showSlides(slideIndex);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function startSlider() {
  timer = setInterval(autoSlide, 4000);
}
function resetAutoSlide() {
  clearInterval(timer);
  startSlider();
}



function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  //if (n > slides.length) {slideIndex = 1}    
  //if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
     dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// Init
showSlides(slideIndex);
startSlider();
}
// Add event listeners to dots
{
let timer;
let slideIndex = 1;
showSlides(slideIndex);

function autoSlide() {
  slideIndex++;
  showSlides(slideIndex);
}

function currentSlide1(n) {
  showSlides(slideIndex = n);
}
function startSlider() {
  timer = setInterval(autoSlide, 4000);
}
function resetAutoSlide() {
  clearInterval(timer);
  startSlider();
}



function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot1");
  //if (n > slides.length) {slideIndex = 1}    
  //if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
     dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// Init
showSlides(slideIndex);
startSlider();
}

{
  let timer;
let slideIndex = 1;
showSlides(slideIndex);

function autoSlide() {
  slideIndex++;
  showSlides(slideIndex);
}

function currentSlide2(n) {
  showSlides(slideIndex = n);
}
function startSlider() {
  timer = setInterval(autoSlide, 4000);
}
function resetAutoSlide() {
  clearInterval(timer);
  startSlider();
}



function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  let dots = document.getElementsByClassName("dot2");
  //if (n > slides.length) {slideIndex = 1}    
  //if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
     dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
showSlides(slideIndex);
startSlider();
}

{
  let timer;
let slideIndex = 1;
showSlides(slideIndex);

function autoSlide() {
  slideIndex++;
  showSlides(slideIndex);
}

function currentSlide3(n) {
  showSlides(slideIndex = n);
}
function startSlider() {
  timer = setInterval(autoSlide, 4000);
}
function resetAutoSlide() {
  clearInterval(timer);
  startSlider();
}



function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides3");
  let dots = document.getElementsByClassName("dot3");
  //if (n > slides.length) {slideIndex = 1}    
  //if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
     dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
showSlides(slideIndex);
startSlider();
}

