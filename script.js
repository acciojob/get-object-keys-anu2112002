function Student(name){
	this.name = name;
}

function getKeys(obj){
	return Object.keys(obj);
}

console.log(getKeys(Student));