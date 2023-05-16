const ulElements = document.querySelectorAll(".header-inner-02 ul");
const menuElement = document.querySelector(".all-menu");
const dotButtons = document.querySelectorAll(".dot-button");
const kMenu = document.querySelectorAll(".header-inner-02 ul span");
// Show menuElement with a slide-down effect when hovering over ulElements
ulElements.forEach(function (ulElement) {
  ulElement.addEventListener("mouseover", function () {
    kMenu.forEach(function (kMenuElement) {
      kMenuElement.style.opacity = "1";
    });
    menuElement.style.display = "block";
    // Set the menuElement's height to the computed height
  });
});

menuElement.addEventListener("mouseover", function () {
  kMenu.forEach(function (kMenuElement) {
    kMenuElement.style.opacity = "1";
  });
  menuElement.style.display = "block";
  // Set the menuElement's height to the computed height
});

// Hide menuElement when mouse moves out of it
menuElement.addEventListener("mouseout", function (event) {
  menuElement.style.display = "none";
  kMenu.forEach(function (kMenuElement) {
    kMenuElement.style.opacity = "0";
  });
});

// 사진 변화
const images = [
  "./img/mainBanner_202304060227494890.jpg",
  "./img/mainBanner_202304060229027550.jpg",
  "./img/mainBanner_202304060229455320.jpg",
  "./img/mainBanner_202304200519189710.jpg",
];
const imageElement = document.getElementById("image");

function changeImage(index) {
  dotButtons.forEach((button) => {
    button.classList.remove("active");
  });
  imageElement.src = images[index];
  dotButtons[index].classList.add("active");
}
