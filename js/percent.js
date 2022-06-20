
function called() {
	p = depth / 100;
	str = " "
	p2 = str + p
	document.getElementById("percent").innerHTML = p2 + "%"; // writes depth
};
setInterval(called, 1)