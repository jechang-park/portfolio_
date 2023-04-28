var page = 1;
var mHtml = $("html");
var speed = 1;

$(window).on("load", (e) => {
  $(document.querySelector(".contents-image")).addClass("fade-down-animate");
});

$(window).on("wheel", function (e) {
  e.preventDefault();
  if (mHtml.is(":animated")) return;
  if (e.originalEvent.deltaY > 0) {
    if (page == 4) return;
    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;
    page--;
  }
  var posTop = (page - 1) * $(window).height();
  mHtml.animate({ scrollTop: posTop }, 1000 / speed); // adjust duration based on speed option
  updateActiveDot(page);
});

function updateActiveDot(page) {
  $(".dot-btn.active").removeClass("active");
  $('.dot-btn[data-section="' + page + '"]').addClass("active");

  // set the background-image of the button element
}

$(".dot-btn").click(function () {
  var section = $(this).data("section");
  var posTop = (section - 1) * $(window).height();
  mHtml.animate({ scrollTop: posTop });
  page = section;
  updateActiveDot(page);
});
AOS.init();
