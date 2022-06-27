function load() {
 depth = localStorage.getItem("depthsave")
 depthcounter = localStorage.getItem("depthcountersave")
 level = localStorage.getItem("levelsave")
 parseInt(depth)
 parseInt(depthcounter)
 parseInt(level)
}
function reset() {
 depth = 0
 depthcounter = 1
 level = 1
}
