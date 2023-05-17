const ulElements = document.querySelectorAll(".header-inner-02 ul");
const menuElement = document.querySelector(".all-menu");
const dotButtons = document.querySelectorAll(".dot-button");
const kMenu = document.querySelectorAll(".header-inner-02 ul span");
const navBarToggle = document.querySelector(".navbar");
const navBar = document.querySelector(".m-all-menu");
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
window.addEventListener("DOMContentLoaded", function () {
	const slider = document.querySelector(".slider");
	const slides = document.querySelectorAll(".slide");
	const prevBtn = document.querySelector(".prev-btn");
	const nextBtn = document.querySelector(".next-btn");
	let currentIndex = 0;

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

	// 이미지 변경 함수
	function changeImage() {
		// 모든 슬라이드의 이미지를 숨김 처리
		slides.forEach(function (slide) {
			slide.style.display = "none";
		});

		// 현재 슬라이드의 이미지를 보여줌
		slides[currentIndex].style.display = "block";
	}
});
