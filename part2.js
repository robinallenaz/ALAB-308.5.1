const data = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

//Sort the array by age.

//Convert the array from string to number
const sortedByAge = data.sort((a, b) => Number(a.age) - Number(b.age));
console.log("Sorted by age:", sortedByAge);

//Filtering array to remove ages older than 50

const filteredByAge = data.filter((person) => Number(person.age) <= 50);
console.log("Filtered by age (<= 50):", filteredByAge);
