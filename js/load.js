function load() {
 depth = window.localStorage.getItem("depthsave")
 depthcounter = window.localStorage.getItem("depthcountersave")
 level = window.localStorage.getItem("levelsave")
 JSON.parse(depth)
 JSON.parse(depthcounter)
 Json.parse(level)
}
function reset() {
 depth = 0
 depthcounter = 1
 level = 1
}
