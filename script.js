//your JS code here. If required.
const student = {
  name: "John"
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// === Example Test Cases ===

// Test 1: Single property
console.log(getKeys(student)); // Output: ["name"]

// Test 2: Multiple properties
const student2 = {
  name: "Alice",
  age: 20,
  city: "New York"
};
console.log(getKeys(student2)); // Output: ["name", "age", "city"]