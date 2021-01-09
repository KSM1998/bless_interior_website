var buttons = document.querySelectorAll("li");
var section = document.querySelectorAll(".each-gallery");
buttons.forEach(function (item) {
  item.addEventListener('click', function () {
    buttons.forEach(function (item) {
      item.clssName = "";
    });
    item.className = "active"; //show images

    var values = item.textContent;
    section.forEach(function (show) {
      show.style.display = "none";

      if (show.getAttribute("data-id") === values || values ==="전체") {
        show.style.display = "block";
      }
    });
  });
});