// 로딩이 완료되면 로딩 화면을 닫음
// Close the loading screen when loading is complete
window.addEventListener("load", function () {
    var loadingScreen = document.getElementById("loading_screen");
    setTimeout(function () {
        loadingScreen.style.display = "none";
    }, 5000);

    var text1 = document.getElementById("text1");
    setTimeout(function () {
        text1.style.display = "none";
    }, 2000);

    var text2 = document.getElementById("text2");
    setTimeout(function () {
        text2.style.display = "block";
    }, 2000);
});
