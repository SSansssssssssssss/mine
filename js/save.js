function save() {
 sessionStorage.setItem("depthsave", depth)
 sessionStorage.setItem("depthcountersave", depthcounter)
 sessionStorage.setItem("levelsave", level)
}
setInterval(save, 1)
