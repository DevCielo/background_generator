var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button")

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function setRandomGradient() {
	var colors = [];

	for (let i = 0; i < 2; i++) {
  		var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  		colors.push(randomColor);
}

	body.style.background = "linear-gradient(to right, " + colors[0] + ", " + colors[1] + ")";

	css.textContent = body.style.background + ";";

	color1.value = colors[0];
	color2.value = colors[1];
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomGradient);