
function short() {
 if (depth > 999 && depth < 999999) {
  sign = "K"
 }
 else {
  sign = ""
 }
}
setInterval(short, 1)
