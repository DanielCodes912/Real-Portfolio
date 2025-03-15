window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  let myBtn = document.getElementById("myBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    myBtn.style.display = "flex";
  } else {
    myBtn.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
