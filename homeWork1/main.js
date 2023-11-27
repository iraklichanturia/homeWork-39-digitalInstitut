/*Შექმენით ფუნქცია რომელსაც პარამეტრების სახით გადასცემთ
მნიშვნელობებს როგორიცაა : სახელი, გვარი, ასაკი, ელ.ფოსტა და ეს
ფუნქცია დააბრუნებს ობიექტს რომელსაც ექნება შესაბამისი ფილდები
რომ შეინახოს გადაწოდებული ინფორმაცია*/

class person {
    constructor(name, surname, age, email){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.email = email;
    }
}

let person1 = new person('Giorgi', 'Kobalia', 20, 'kob@gmail.com');
let person2 = new person('irakli', 'chanturia', 30, 'chanti@gmail.com');
let person3 = new person('sandro', 'gabunia', 25, 'gab@gmail.com');

console.log(person1);
console.log(person2);
console.log(person3);





// function person(name, surname, age, email){
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.email = email;
// }

// let person1 = new person('Giorgi', 'Kobalia', 20, 'asdasd@mail.com');

// console.log(person1);