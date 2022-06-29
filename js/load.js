function load() {
 depth = window.localStorage.getItem("depthsave")
 depthcounter = window.localStorage.getItem("depthcountersave")
 level = window.localStorage.getItem("levelsave")
 Number(depth)
 Number(depthcounter)
 Number(level)
}
function reset() {
 depth = 0
 depthcounter = 1
 level = 1
}
