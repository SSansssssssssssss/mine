function save() {
 var str = " "
 depthstring = depth + str
 depthcounterstring = depthcounter + str
 levelstring = level + str
 localStorage.setItem("depthsave", depthstring)
 localStorage.setItem("depthcountersave", depthcounterstring)
 localStorage.setItem("levelsave", levelstring)
}
setInterval(save, 1)
