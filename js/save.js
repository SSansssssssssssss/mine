function save() {
 window.localStorage.setItem("depthsave", depth)
 window.localStorage.setItem("depthcountersave", depthcounter)
 window.localStorage.setItem("levelsave", level)
}
setInterval(save, 1)
