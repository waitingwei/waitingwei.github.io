const flag = false;
const colorsMap = {
  red: "#F43051",
  yellow: "#FFB812",
  blue: "#3C83EC",
  green: "#55BD47"
};
$("#menu a").on("click", function() {
  const $this = $(this);
  const color = $this.data("color");
  if (flag) return;
  falg = true;

  $(".menuT").click();
  setTimeout(() => {
    $("body").append('<div class="slider"></div>');
    $(".slider").css("background-color", colorsMap[color]);
    setTimeout(() => {
      window.location.href = $this.data("href");
      flag = false;
    }, 800);
  }, 100);
});
