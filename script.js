// Smooth scrolling (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// $(function() {
//   $("#navbar-placeholder").load("./components/nav.html");
//   $("#footer-placeholder").load("./components/footer.html", function() {
//     // 只有footer加载完成后再设置年份
//     const currentYear = new Date().getFullYear();
//     $(".footer p").html(`Copyright © ${currentYear} - All right reserved`);
//   });
// });

