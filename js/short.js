
function short() {
 if (depth > 999 && depth < 999999) {
  sign = "K";
  var a = depth / 1000
  depthf = a;
  depthk = depthf + ""
 }
 else {
  sign = "";
  depthf = depth;
  depthk = depthf + ""
 }
}
setInterval(short, 1)
