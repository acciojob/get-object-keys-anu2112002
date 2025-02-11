function Student(name, age, city){
	this.name = name;
	this.age = age;
	this.city = city;
}

function getKeys(obj){
	return Object.keys(obj);
}

console.log(getKeys(Student));