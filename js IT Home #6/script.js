// 1.
  let character = {
    name: "Гаррі Поттер",
    age: 17,
    description: "Хоробрий, лояльний, і має сильне почуття справедливості" 
  };

  console.log(character);

//2
console.log(character.name);

//3
character.age = 18; // Став старшим
character.description = "Мудрий, сміливий, і відданий друзям";

console.log(character.age);

//4
character.powerLevel = 1000; // Значення рівня сили

console.log(character);

//5
delete character.description; // Видалимо description

console.log("description" in character);
console.log(character);

//6
let key = "age";

// Змінюю вік персонажа
character[key] = 19; // Гаррі став на рік старшим

console.log(character);

//7

// Використання методу hasOwnProperty
console.log(character.hasOwnProperty('age'));

//8
// Цикл for...in для перебору властивостей об'єкта
for (let key in character) {
  if (character.hasOwnProperty(key)) {
    console.log(key + ': ' + character[key]);
  }
}

//9
let address = {
  street: "Головна вулиця",
  building: {
    number: 10,
    apartment: 2
  },
  city: "Біла Церква",
  country: "Україна",
  postalCode: "09100"
};

console.log(address);

//10
let person = {
  firstName: "Олександр",
  lastName: "Засадюк",
  age: 29,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  isAdult: function() {
    return this.age >= 18;
  }
};

console.log(person.fullName());
console.log(person.isAdult());