
function short() {
 if (depth > 999 && depth < 999999) {
  sign = "K"
  depthf = depth / 1000
 }
 else {
  sign = ""
  depthf = depth
 }
}
setInterval(short, 1)
