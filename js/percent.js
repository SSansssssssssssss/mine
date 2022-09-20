punlocked = 0
function called() {
 if (punlocked = 0) {
  p = depth / 100;
  str = " "
  p2 = str + p
  document.getElementById("percent").innerHTML = p2 + "%"; // writes depth
  document.getElementById("name").innerHTML = "Get 1K depth for pickaxes!";
  if (depth > 10000 && punlocked == 0) {
   punlocked = 1
  }
 }
 else {
  p = depth / 10000000;
  str = " "
  p2 = str + p
  document.getElementById("percent").innerHTML = p2 + "%";
  document.getElementById("name").innerHTML = "Get 1B depth for multipliers!";
 }
};
setInterval(called, 1)
