
var depth2 = depthf + ""

document.getElementById("mine").innerHTML = depth; // writes depth
function mine() {
 depth = depth + (depthcounter * level); // adds depth     
 document.getElementById("mine").innerHTML = depthf + sign; // writes depth
}
