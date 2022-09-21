function load() {
 depth = localStorage.getItem("depthsave")
 depthcounter = localStorage.getItem("depthcountersave")
 level = localStorage.getItem("levelsave")
 window.alert(depth)
 window.alert(depthcounter)
 window.alert(level)
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
