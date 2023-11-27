// Შექმენით ფუნქცია რომელსაც პარამეტრის სახით გადაეცემა შემდეგი
// ინფორმაცია: სახელი, გვარი, ასაკი, ელ ფოსტა, სასწავლებელი სკოლა,
// სასწავლებელი უნივერსიტეტი, სამსახურის დასახელება, პოზიცია
// სამსახურში, სამუშაო გამოცდილება წლებში, საცხოვრებელი ქვეყანა,
// საცხოვრებელი ქალაქი, საცხოვრებელი სახლის მისამართი და ეს ფუნქცია
// დააბრუნებს ობიექტს, ობიექტის სტრუქტურა გამართეთ სწორად

class personInfo{
    constructor(name, surname, age, email, school, university, job, position, experience, country, city, address){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.email = email;
        this.school = school;
        this.university = university;
        this.job = job;
        this.position = position;
        this.experience = experience;
        this.country = country;
        this.city = city;
        this.address = address;
    };
};

function person(name, surname, age, email, school, university, job, position, experience, country, city, address){
    return new personInfo(name, surname, age, email, school, university, job, position, experience, country, city, address)
};



let personInfoUpdatedOne = person(
    'John',
    'Doe',
    25,
    'john.doe@example.com',
    'High School XYZ',
    'University ABC',
    'Software Developer',
    'Senior Developer',
    '5 years',
    'USA',
    'New York',
    '123 Main Street'
);

console.log(personInfoUpdatedOne);