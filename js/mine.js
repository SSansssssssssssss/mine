depth = 0;
depthcounter = 1;
document.getElementById("mine").innerHTML = depth; // writes depth
function mine() {
 depth = depth + (depthcounter * level); // adds depth     
 document.getElementById("mine").innerHTML = depth; // writes depth
}