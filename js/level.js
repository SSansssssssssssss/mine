costlevel = 10
level = 1
function levelup() {
	if (depthcounter >= costlevel) {
		depthcounter = 1
		cost = 25
		depth = 0
		costlevel = costlevel * 2
		level = level + 1
		var str = " "
		var c = costlevel + str
		var l = level + str
		document.getElementById("level").innerHTML = "Level cost: " + c + " Mine power."
		document.getElementById("levell").innerHTML = "Each level is multiplier for depth. Level: " + l
		console.log(l)
	}
}
		
