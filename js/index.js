$(document).ready(function () {

  /* 메인 하단 흐르는 텍스트 */
/*   let x = 0;
  let s = 3;

  function motion() {
    x = x + s;
    if (x < -1400) { x = 0 };
    if (x > 0) { x = -1400 };

    $(".s6Text").css({ left: x });
  };
  bauto = setInterval(motion, 20); */

  //오버시 멈춤
  $(".s6Text").hover(function () {
    clearInterval(bauto);
  }, function () {
    bauto = setInterval(motion, 20);
  });

  /* 모바일 햄버거 메뉴 */
  $(".moMenuView").css({ "right": "-60%" }); /*처음위치*/
  $(".close").hide();

  $(".mHamBtn").click(function () {
    $(".moMenuView").stop(true, true).animate({ "right": "0%" });
    $(".close").show();
  });

  $(".close").click(function () {
    $(".moMenuView").stop(true, true).animate({ "right": "-60%" });
    $(".close").hide();
  });











});
