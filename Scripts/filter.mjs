export function hw2q2() {
  // Homework 1 Question 2 Names beginning with A
  // Ethan Blum

  const Names = ['Alice', 'Bob', 'Alex', 'Andrea', 'Bernie', 'Betsy'];

  var startWA = Names.filter(Name => Name.startsWith('A'));
  var startWB = Names.filter(Name => Name.startsWith('B'));

  console.log("Names that start with A: \n" + startWA);
  console.log("Names that start with B: \n" + startWB);
}