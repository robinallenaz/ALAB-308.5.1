const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None" }, // No age field
  ];
  
  // Function to ensure each object has an age and updated_at field
  const ensureFields = (person) => {
    return {
      ...person,
      age: person.age ? Number(person.age) : 0, // Set age to 0 if it doesn't exist
      updated_at: new Date() // Set updated_at to current date
    };
  };
  
  // Ensure all objects have the required fields
  const updatedData = data.map(ensureFields);
  
  // Sort the array by age
  const sortedByAge = updatedData.sort((a, b) => a.age - b.age);
  console.log("Sorted by age:", sortedByAge);
  
  // Filter the array to remove ages older than 50
  const filteredByAge = updatedData.filter((person) => person.age <= 50);
  console.log("Filtered by age (<= 50):", filteredByAge);
  
  // Map the array to change the “occupation” key to “job” and increment every age by 1
  const finalUpdatedData = updatedData.map(person => ({
      ...person,
      job: person.occupation,  // Change 'occupation' to 'job'
      age: person.age + 1,     // Increment age by 1 and keep it as a number
      updated_at: new Date()    // Update the updated_at field
  }));
  console.log("Data with occupation changed to 'job' and age incremented:", finalUpdatedData);
  
  // Calculate the total sum with "reduce"
  const totalAge = finalUpdatedData.reduce((sum, person) => sum + person.age, 0);
  console.log("Total sum of ages:", totalAge);
  
  // Calculate the average age
  const averageAge = totalAge / finalUpdatedData.length;
  console.log("Average age:", averageAge);
  