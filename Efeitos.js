(function() {
  let lastScroll = 0;
  const header = document.querySelector('.drop-header') || document.querySelector('header');
  if (!header) return;

  window.addEventListener('scroll', function () {
    const current = window.pageYOffset || document.documentElement.scrollTop;

    if (current > lastScroll && current > 50) {
   
      header.classList.add('hidden');
    } else if (current < lastScroll) {
  
      header.classList.remove('hidden');
    }

    lastScroll = current <= 0 ? 0 : current;
  }, { passive: true });
})();

    document.addEventListener("DOMContentLoaded", function () {
      const animateElements = document.querySelectorAll(".animate-on-scroll");

      function checkScroll() {
        animateElements.forEach((element, index) => {
          const elementPosition = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (elementPosition < windowHeight * 0.70) {
            element.classList.add("visible");

            if (element.parentElement.classList.contains("list")) {
              element.style.transitionDelay = `${index * 0.1}s`;
            }
          }
        });
      }
      checkScroll();
      window.addEventListener("scroll", checkScroll);
    });