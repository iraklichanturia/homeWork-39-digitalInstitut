// Შექმენით ფუნქციები :
// a. Ფუნქცია რომელსაც პარამეტრების სახით გადაეცემა მასივი humans
// (სახელი, გვარი, ასაკი, სქესი, ელ.ფოსტა, მობილურის ნომერი) და ეს
// ფუნქცია დააბრუნებს Users ის კოლექციას ( სრული სახელი,
// ელ.ფოსტა)
// b. Ფუნქცია რომელსაც რომელსაც პარამეტრების სახით გადაეწოდება
// კონტაქტების მასივი(კონტაქტის ობიექტი : სახელი, გვარი,
// მობილურის ნომერი, ელ.ფოსტა, სურათი) და ამ ფუნქციას შეეძლება
// დაფილტროს კონტაქტების მასივი ამ სახელით ან გვარის მიხედვით
// (დაფილტვრის ფუნქციის მუშაობის პრინციპი შემდეგია თუ
// ობიექტის მნიშნელობა შეიცავს გადაცემულ მნიშნელობას მაშინ ეს
// ობიექტი უნდა ამოვარჩიოთ ფილტრაციის შედეგად)

class Humans {
  constructor(name, surname, age, gender, email, mobileNumber) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.email = email;
    this.mobileNumber = mobileNumber;
  }
}

function getUsers(humans) {
    return humans.map((human) => {
      return {
        fullName: `${human.name} ${human.surname}`,
        email: human.email,
      };
    });
  }
  

class contacts {
  constructor(name, surname, mobileNumber, email, image) {
    this.name = name;
    this.surname = surname;
    this.mobileNumber = mobileNumber;
    this.email = email;
    this.image = image;
  }
}



function filterContacts(contacts, name, surname) {
  return contacts.filter((contact) => {
    return contact.name === name && contact.surname === surname;
  });
}

let human = [
  new Humans("John", "Doe", 25, "Male", "john.doe@example.com", "123456789"),
  new Humans(
    "Alice",
    "Johnson",
    30,
    "Female",
    "alice@example.com",
    "987654321"
  ),
];

let contact = [
  new contacts(
    "Jim",
    "powel",
    "123456789",
    "sadas@sadsd",
    "https://www.w3schools.com/howto/img_avatar.png"
  ),
  new contacts(
    "Alice",
    "Johnson",
    "987654321",
    "alice@example.com",
    "https://www.w3schools.com/howto/img_avatar.png"
  ),
];

console.log(getUsers(human));
console.log(filterContacts(contact, "Jim", "powel"));