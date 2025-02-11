//your JS code here. If required.
const student = {
  name: "John",
};

function getKeys(obj) {
  return Object.keys(obj);
}

console.log(getKeys(student)); 

const studentWithMultipleProperties = {
  name: "Alice",
  age: 22,
  city: "Tokyo",
};

const studentWithOneProperty = {
  name: "Bob",
};

console.log(getKeys(studentWithMultipleProperties)); 

console.log(getKeys(studentWithOneProperty));
