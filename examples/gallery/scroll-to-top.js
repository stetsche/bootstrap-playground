
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      document.getElementById("scrollToTopButton").classList.add("show");
    } else {
      document.getElementById("scrollToTopButton").classList.remove("show");
    }
  });

  document.getElementById("scrollToTopButton").addEventListener("click", function () {
    document.getElementById("scrollToTopButton").classList.add("clicked");
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(function () {
      document.getElementById("scrollToTopButton").classList.remove("clicked");
    }, 1000);
  });
});