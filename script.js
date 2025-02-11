// Create the student object
const student = {
  name: "John",
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Testing the function
console.log(getKeys(student)); // Output: ["name"]

// Additional Tests
const studentWithMultipleProperties = {
  name: "Alice",
  age: 22,
  city: "Tokyo",
};

const studentWithOneProperty = {
  name: "Bob",
};

// Test 1: Object with multiple properties
console.log(getKeys(studentWithMultipleProperties)); // Output: ["name", "age", "city"]

// Test 2: Object with only one property
console.log(getKeys(studentWithOneProperty)); // Output: ["name"]
