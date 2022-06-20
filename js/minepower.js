cost = 25;
depthcounter = 1;
document.getElementById("costminepower").innerHTML = cost;
document.getElementById("minepower").innerHTML = depthcounter;
function minepower() {
 if (cost <= depth) {
  depthcounter = depthcounter + 1;
  depth = depth - cost
  cost = cost * 1.5;
  cost = OmegaNum.round(cost)
  str = " "
  c = str + cost
  document.getElementById("mine").innerHTML = depth; // writes depth
  document.getElementById("costminepower").innerHTML = "Cost:" + c + " depth.";
  document.getElementById("minepower").innerHTML = depthcounter;
 }
}