//Elemento do controle deslizante
var slider = document.getElementById("slider");
var body = document.body;
slider.addEventListener("input", function () {
  body.setAttribute("data-light", slider.value);
});
