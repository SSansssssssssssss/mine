
var depth2 = depth + ""

document.getElementById("mine").innerHTML = depth; // writes depth
function mine() {
 depth = depth + (depthcounter * level); // adds depth     
 document.getElementById("mine").innerHTML = depth2 + sign; // writes depth
}
