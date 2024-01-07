//gallery
function openModal(imageSrc) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImg.src = imageSrc;
  }

  function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }

//typedjs
  document.addEventListener('DOMContentLoaded', function () {
      var options = {
        strings: ["FOSSMEET ' 24", "Join us at NITC", "March 15-17"],
        typeSpeed: 80,
        backSpeed: 40,
        showCursor: false, 
        loop: true 
      };

      var typed = new Typed("#typed-output", options);
    });

//fade in 
  document.addEventListener("DOMContentLoaded", function () {
    var section1 = document.getElementById("section1");
    var section2 = document.getElementById("section2");

    function handleScroll() {
      var distanceFromTop1 = section1.getBoundingClientRect().top;
      var distanceFromTop2 = section2.getBoundingClientRect().top;

      if (distanceFromTop1 < window.innerHeight - 100) {
        section1.classList.add("visible");
      } else {
        section1.classList.remove("visible");
      }

      if (distanceFromTop2 < window.innerHeight - 100) {
        section2.classList.remove("hidden");
      } else {
        section2.classList.add("hidden");
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
  });