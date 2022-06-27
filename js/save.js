function save() {
 depthstring = OmegaNum(depth).toString()
 depthcounterstring = OmegaNum(depthcounter).toString()
 levelstring = OmegaNum(level).toString()
 localStorage.setItem("depthsave", depthstring)
 localStorage.setItem("depthcountersave", depthcounterstring)
 localStorage.setItem("levelsave", levelstring)
}
setInterval(save, 1)
