// welcom traveler
stick = 0
//stick buy function yes
function stickbuy {
  if (punlocked == 1) {
    if (depth >= 1000) {
      stick = stick + 1
      depth = depth - 1000
    }
  }
}
//actually mining.
function minemine() {
  sticktotal = stick * 1
  depth = depth + sticktotal
}
setInterval(minemine, 1000)
