  const btn = document.getElementById("backToTop");
  const threshold = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--scroll-threshold"));

  window.addEventListener("scroll", () => {
    if (window.scrollY > threshold) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });