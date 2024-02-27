document.addEventListener("DOMContentLoaded", function () {
    var scrollLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');
    scrollLinks.forEach(function (scrollLink) {
      scrollLink.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });