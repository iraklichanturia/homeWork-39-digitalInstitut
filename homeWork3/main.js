// 3. Შექმენით ფუნქცია, რომელსაც პარამეტრების სახით გადაეცემა ობიექტები
// animal ტიპის ( სახელი, ასაკი, ჯიში, სქესი) და ეს ფუნქცია დაფილტრავს
// გადაცემულ ცხოველების მასივს სქესის მიხედვით (სქესი აგდაეცემა მეორე
// პარამეტრის სახით ფუნქციას)

class animal {
  constructor(name, age, breed, gender) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
  }
}

let animals = [
    new animal('Buddy', 3, 'Golden Retriever', 'Male'),
    new animal('Mittens', 2, 'Siamese', 'Female'),
    new animal('Rocky', 5, 'Boxer', 'Male'),
];

function filterByGender(animalArray, gender){
  return animalArray.filter(animal => animal.gender === gender )
}


let females = filterByGender(animals, 'Female');
let males = filterByGender(animals, 'Male');

console.log('Female animals:', females);
console.log('Male animals:', males);
