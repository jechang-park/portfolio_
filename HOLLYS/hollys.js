const ulElements = document.querySelectorAll(".header-inner-02 ul");
const menuElement = document.querySelector(".all-menu");
const dotButtons = document.querySelectorAll(".dot-button");
const kMenu = document.querySelectorAll(".header-inner-02 ul span");
const navBarToggle = document.querySelector(".navbar");
const navBar = document.querySelector(".m-all-menu");
const imageElement = document.getElementById("image");

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

menuElement.addEventListener("mouseout", function (event) {
    menuElement.style.display = "none";
    kMenu.forEach(function (kMenuElement) {
        kMenuElement.style.opacity = "0";
    });
});

// 배너사진 변화

const images = [
    "./img/mainBanner_202304060227494890.jpg",
    "./img/mainBanner_202304060229027550.jpg",
    "./img/mainBanner_202304060229455320.jpg",
    "./img/mainBanner_202304200519189710.jpg",
];

let currentIndex = 0;
let intervalId;

// Function to change the image and update dot button states
function changeImage(index) {
    dotButtons.forEach((button) => {
        button.classList.remove("active");
    });
    imageElement.src = images[index];
    dotButtons[index].classList.add("active");
    currentIndex = index;
}

// Function to handle automatic slide
function startSlideShow() {
    intervalId = setInterval(() => {
        let nextIndex = (currentIndex + 1) % images.length;
        changeImage(nextIndex);
    }, 3000);
}

// Function to stop automatic slide
function stopSlideShow() {
    clearInterval(intervalId);
}

// Event listener for dot buttons
dotButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        stopSlideShow();
        changeImage(index);
    });
});

// Start automatic slide show
startSlideShow();

// 토글기능

navBarToggle.addEventListener("click", function () {
    if (navBar.style.display === "none") {
        navBar.style.display = "block";
    } else {
        navBar.style.display = "none";
    }
});
window.addEventListener("resize", function () {
    if (window.innerWidth > 1068) {
        navBar.style.display = "none";
    }
});

// 메뉴사진 슬라이드

window.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider"); // 슬라이더 요소 선택
    const slides = document.querySelectorAll(".slide"); // 슬라이드 요소들 선택
    const prevBtn = document.querySelector(".prev-btn"); // 이전 버튼 선택
    const nextBtn = document.querySelector(".next-btn"); // 다음 버튼 선택
    let currentIndex = 0; // 현재 슬라이드 인덱스
    let intervalId; // 자동 슬라이드를 위한 인터벌 ID

    // 이전 버튼 클릭 시 이전 슬라이드로 이동
    prevBtn.addEventListener("click", function () {
        // 이전 슬라이드의 인덱스 계산
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;

        // 이미지 변경
        changeImage();
    });

    // 다음 버튼 클릭 시 다음 슬라이드로 이동
    nextBtn.addEventListener("click", function () {
        // 다음 슬라이드의 인덱스 계산
        currentIndex = (currentIndex + 1) % slides.length;

        // 이미지 변경
        changeImage();
    });

    // 자동 슬라이드 시작
    startSlideShow();

    // 자동 슬라이드 시작 함수
    function startSlideShow() {
        intervalId = setInterval(function () {
            // 다음 슬라이드의 인덱스 계산
            currentIndex = (currentIndex + 1) % slides.length;

            // 이미지 변경
            changeImage();
        }, 3000);
    }

    // 이미지 변경 함수
    function changeImage() {
        // 모든 슬라이드의 이미지를 숨김 처리
        slides.forEach(function (slide) {
            slide.style.display = "none";
        });

        // 현재 슬라이드의 이미지를 보여줌
        slides[currentIndex].style.display = "block";
    }

    // 마우스 오버 시 자동 슬라이드 일시 정지
    slider.addEventListener("mouseover", function () {
        clearInterval(intervalId);
    });

    // 마우스 아웃 시 자동 슬라이드 다시 시작
    slider.addEventListener("mouseout", function () {
        startSlideShow();
    });
});
