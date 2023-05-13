// 로딩이 완료되면 로딩 화면을 닫음
// Close the loading screen when loading is complete

window.addEventListener("load", function () {
    var loadingScreen = document.getElementById("loading_screen");
    setTimeout(function () {
        loadingScreen.style.display = "none";
    }, 2700);

    var text1 = document.getElementById("text1");
    setTimeout(function () {
        text1.style.display = "none";
    }, 2000);

    var text2 = document.getElementById("text2");
    setTimeout(function () {
        text2.style.display = "block";
    }, 2000);
    var first = document.querySelector(".first");
    first.style.opacity = 0;
    first.style.transform = "translateY(50px)";
    setTimeout(function () {
        first.style.opacity = 1;
        first.style.transform = "translateY(0)";
        first.style.transition =
            "opacity 1s ease-in-out, transform 1s ease-in-out";
    }, 3200);
    var second = document.querySelector(".second");
    second.style.opacity = 0;
    second.style.transform = "translateY(50px)";
    setTimeout(function () {
        second.style.opacity = 1;
        second.style.transform = "translateY(0)";
        second.style.transition =
            "opacity 1s ease-in-out, transform 1s ease-in-out";
    }, 3600);
});
const autoplayBtn = document.querySelector(".autoplay-btn");
autoplayBtn.addEventListener("click", function () {
    var img = autoplayBtn.querySelector(".pause-image");
    if (swiper.autoplay.running) {
        swiper.autoplay.stop();
        img.setAttribute("src", "./img/play.png");
    } else {
        swiper.autoplay.start();
        img.setAttribute("src", "./img/pause.png");
    }
});
