const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];



// Recupera i dati dello studente con id 2


// for (i = 0; i = students.length; i++) {
//   let student = student[1];
// }

let idNumber = 2;

let student = students.filter(number => number.id === idNumber);
console.log(student);


// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }