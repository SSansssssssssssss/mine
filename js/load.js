function load() {
 depth = localStorage.getItem("depthsave")
 depthcounter = localStorage.getItem("depthcountersave")
 level = localStorage.getItem("levelsave")
 console.log(depth)
 console.log(depthcounter)
 console.log(level)
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
