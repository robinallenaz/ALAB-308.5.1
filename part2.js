const data = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

// Function to ensure each object has an age and updated_at field (PART 3)

const ensureFields = (person) => {
    return {
      ...person,
      age: person.age ? Number(person.age) : 0, // Set age to 0 if it doesn't exist
      updated_at: new Date() // Set updated_at to current date
    };
  };
  
  // Ensure all objects have the required fields
  const updatedData = data.map(ensureFields);

//Sort the array by age.

//Convert the array from string to number
const sortedByAge = data.sort((a, b) => Number(a.age) - Number(b.age));
console.log("Sorted by age:", sortedByAge);

//Filtering array to remove ages older than 50

const filteredByAge = data.filter((person) => Number(person.age) <= 50);
console.log("Filtered by age (<= 50):", filteredByAge);

//Map the array to change the “occupation” key to “job” and increment every age by 1

const updatedData = data.map(person => ({
    ...person,
    job: person.occupation,  // Change 'occupation' to 'job'
    age: String(Number(person.age) + 1)  // Increment age by 1 and keep it a string
}));
console.log("Data with occupation changed to 'job' and age incremented:", updatedData);

//Calculate the total sum with "reduce"

const totalAge = data.reduce((sum, person) => sum + Number(person.age), 0);
console.log("Total sum of ages:", totalAge);

//Calculate the average age

const averageAge = totalAge / data.length;
console.log("Average age:", averageAge);
