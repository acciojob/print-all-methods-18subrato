//your JS code here. If required.
function allMethods() {
	 const mathMethods = Object.getOwnProperyNames(Math).filter((prop)=>typeof Math[prop] === 'function');
	return mathMethods;
}

alert(allMethods());
