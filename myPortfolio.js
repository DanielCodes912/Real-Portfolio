// window.onscroll = function() {
//   scrollFunction();
// };

// function scrollFunction() {
//   let myBtn = document.getElementById("myBtn");
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//     myBtn.style.display = "flex";
//   } else {
//     myBtn.style.display = "none";
//   }
// }

// function topFunction() {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// }
document.addEventListener("DOMContentLoaded", function () {
  const projectLinks = document.querySelectorAll(".view-project");
  const reviewLinks = document.querySelectorAll(".check-review");

  projectLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Project link will be updated soon!");
    });
  });

  reviewLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Reviews will be available soon!");
    });
  });
});

// Scroll-to-top button functionality
window.onscroll = function () {
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
