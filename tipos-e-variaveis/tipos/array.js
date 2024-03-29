const users = ["Jane", "Pedro", "Fernanda"];

const gender = {
  MAN: Symbol("M"),
  WOMAN: Symbol("W")
};

const persons = [
  {
    name: "Jane",
    age: 00,
    gender: gender.MAN
  },
  {
    name: "Pedro",
    age: 43,
    gender: gender.MAN
  },
  {
    name: "Fernanda",
    age: 18,
    gender: gender.WOMAN
  }
];

// Retornar a quantidade de itens de um array
console.log("Itens: ", persons.length);

// Verificar se é array
console.log("A variável persons é um array:", Array.isArray(persons));

// Iterar os itens do array
persons.forEach(person => {
  console.log(`Nome: ${person.name}`);
});

// Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log("\nNova lista apenas com homens:", mens);

// Retornar um novo
const personsWithCourse = persons.map(person => {
  person.course = "Introdução ao Javascript";
  return person;
});

console.log("\nPessoas com a adição do course:", personsWithCourse);

// Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
  age += person.age;
  return age;
}, 0);

console.log("\nSoma de idade das pessoas", totalAge);

// Juntando operações
const totalEvenAges = persons
  .filter(person => person.age % 2 === 0)
  .reduce((age, person) => {
    age += person.age;
    return age;
  }, 0);
console.log(
  "\nSoma de idades das pessoas que possuem idade par",
  totalEvenAges
);