const url = new URL(window.location.href);
// console.log(url.pathname);
const path = url.pathname.replace(/\//g, "");

fetch("../../header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
    $("#menu-items li")
      .map(function () {
        const id = $(this).data("id");
        if (id === path) {
          $(this).addClass("active");
        }
      })
      .get();
  });

fetch("../../footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

fetch("../../maintanance.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("maintenance").innerHTML = data;
  });
