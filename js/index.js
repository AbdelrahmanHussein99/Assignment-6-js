//scorll to sec ==========================
$(".nav-link").click(function () {
  let loca = $(this).attr("data");
  let sectionTop = $(loca).offset().top;
  $("body , html").animate(
    {
      scrollTop: sectionTop,
    },
    2000
  );
});
//change color of open & close ==========================

$(window).scroll(function () {
  let windowScroll = $(window).scrollTop();
  let sec2 = $("#details").offset().top - 500;
  if (windowScroll > sec2) {
    $(".colr").css({
      color: "#fb4c53",
    });
  } else {
    $(".colr").css({
      color: "white",
    });
  }
});

// navbar ==================================

let widthInner = $("#navBar").outerWidth();
//fun open navbar ===
function openNav() {
  $("nav").css({
    left: `0px`,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    transition: "left  700ms, background-color 200ms",
  });
  $("#textBtn").text("Close");
}
//fun close navbar ===

function closeNav() {
  $("nav").css({
    left: `-${widthInner}px`,
    width: "auto",
    backgroundColor: "transparent",
    transition: "left   600ms, background-color 200ms",
  });
  $("#textBtn").text("Open");
}
//toggle  open & close navbar ==========================

$("#box").click(() => {
  let leftBox = $("#navBar").offset().left;
  if (leftBox === 0) {
    closeNav();
  } else {
    openNav();
  }
});
//close xmark navbar ===============

$("#closeBtn").click(() => {
  closeNav();
  $("#textBtn").text("Open");
});
//slider  ============================

$(".singer").click((e) => {
  $(".innerText").not($(e.target).next()).slideUp(800);
  $(e.target).next().slideToggle(800);
});
//count down date fun ============================

$(window).ready(() => {
  let counterDown = setInterval(() => {
    let countDownDate = new Date("25 augst, 2023 23:59:59").getTime();
    let timeNow = new Date().getTime();
    let diffTime = countDownDate - timeNow;
    let days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let mins = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((diffTime % (1000 * 60)) / 1000);

    $("#days").text(days < 10 ? `0${days}` : days);
    $("#hours").text(hours < 10 ? `0${hours}` : hours);
    $("#mins").text(mins < 10 ? `0${mins}` : mins);
    $("#secs").text(secs < 10 ? `0${secs}` : secs);

    if (diffTime < 0) {
      clearInterval(counterDown);

      $("#days").text(`00`);
      $("#hours").text(`00`);
      $("#mins").text(`00`);
      $("#secs").text(`00`);
    }
  }, 1000);
});
//count char in textarea ============================

$("#message").keydown(() => {
  let reaminingChar = 100;
  let text = $("#message").val().length;

  reaminingChar -= text;
  $("#char").text(
    reaminingChar < 0
      ? (reaminingChar = "your available character finished")
      : reaminingChar
  );
});
