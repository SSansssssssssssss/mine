function load() {
 depth = sessionStorage.getItem("depthsave")
 depthcounter = sessionStorage.getItem("depthcountersave")
 level = sessionStorage.getItem("levelsave")
 JSON.parse(depth)
 JSON.parse(depthcounter)
 JSON.parse(level)
}
function reset() {
 depth = 0
 depthcounter = 1
 punlocked = 0
 level = 1
}
