$(document).ready(function() {
    var slideIndex = 0;
    showSlides();
  
    function showSlides() {
      var i;
      var slides = $(".slide-image");
      var dots = $(".slide-dot");
      
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      
      if (slideIndex > slides.length) { slideIndex = 1; }
      
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
      
      setTimeout(showSlides, 5000); // Change the slide every 5 seconds
    }
  });