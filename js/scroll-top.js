var up = document.getElementsByClassName("scroll-top")[0];

window.addEventListener("scroll", function () {
  const distance = window.scrollY;
  if (distance > 300) {
    up.classList.add("show");
  } else {
    up.classList.remove("show");
  }
});

up.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

up.addEventListener("mousemove", function () {
  up.innerHTML = "<i>"+fa-chevron-up+"</i>";
});
up.addEventListener("mouseout", function () {
  up.innerHTML = "<i>"+fa-chevron-up+ "</i>";
});
