function save() {
 depthstring = OmegaNum.toString(depth)
 depthcounterstring = OmegaNum.toString(depthcounter)
 levelstring = OmegaNum.toString(level)
 localStorage.setItem("depthsave", depthstring)
 localStorage.setItem("depthcountersave", depthcounterstring)
 localStorage.setItem("levelsave", levelstring)
}
setInterval(save, 1)
