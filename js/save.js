function save() {
 localStorage.setItem("depthsave", depth)
 localStorage.setItem("depthcountersave", depthcounter)
 localStorage.setItem("levelsave", level)
}
setInterval(save, 1)
