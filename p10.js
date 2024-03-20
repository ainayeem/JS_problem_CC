const students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 22 },
  { name: "Alice", age: 23 },
  { name: "Charlie", age: 21 },
];
function groupStudentsByName(students) {
  const group = {};

  for (let i = 0; i < students.length; i++) {
    const name = students[i].name;

    if (!group[name]) {
      group[name] = [];
    }
    group[name].push(students[i]);
  }

  return group;
}
console.log("Grouped Students:", groupStudentsByName(students));
// Output:
// {
// "Alice": [
// { name: "Alice", age: 20 },
// { name: "Alice", age: 23 }
// ],
// "Bob": [
// { name: "Bob", age: 22 }
// ],
// "Charlie": [
// { name: "Charlie", age: 21 }
// ]
// }
