$(document).ready(function () {
  $(".close").hide();
  $(".menu").hide();
  $(".hamburger").click(function () {
    $(".menu").slideToggle("slow", function () {
      $(".close").show();
    });
  });

  $(".close").click(function () {
    $(".menu").slideToggle("slow", function () {
      $(".close").hide();
      $(".hamburger").show();
    });
  });
});
