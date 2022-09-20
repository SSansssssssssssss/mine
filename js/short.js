
function short() {
 if (depth > 999 && depth < 999999) {
  sign = "K";
  depthf = depth / 1000;
  depthk = depthf + ""
 }
 else {
  sign = "";
  depthf = depth;
  depthk = depthf + ""
 }
}
setInterval(short, 1)
