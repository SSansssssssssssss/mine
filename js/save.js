function save() {
 depthstring = OmegaNum.toString(depth)
 depthcounterstring = OmegaNum.tostring(depthcounter)
 levelstring = OmegaNum.tostring(level)
 localStorage.setItem("depthsave", depthstring)
 localStorage.setItem("depthcountersave", depthcounterstring)
 localStorage.setItem("levelsave", levelstring)
}
setInterval(save, 1)
