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

  // Agar Carousel dan konten lainnya ikut ke bawah ketika navbar terbuka (mobile) sehingga tida menutup carousel
  document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const body = document.body;

    navbarToggler.addEventListener("click", function () {
        if (body.classList.contains("navbar-expanded")) {
            body.classList.remove("navbar-expanded");
        } else {
            body.classList.add("navbar-expanded");
        }
    });
});

// Agar navbar menghilang saat scroll ke bawah dan muncul saat scroll ke atas
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll ke bawah, sembunyikan navbar
        navbar.classList.add('navbar-hidden');
    } else {
        // Scroll ke atas, tampilkan navbar
        navbar.classList.remove('navbar-hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Untuk scroll ke atas di bagian atas halaman
});
