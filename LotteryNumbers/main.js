// დაწერეთ ლოტოს აპლიკაცია დაარეგისტრირეთ მომხმარებლები
// ინფორმაციით როგორიცაა ( სრული სახელი, პირადი ნომერი, არჩეული
// ციფრები ლოტოს გათამაშებისთვის(7 ლოტოს ციფრი) ) და შექმენით
// ფუნქცია რომელიც დააბრუნებს მასივს სადაც ეწერება ლოტოს მომგებიანი
// კოჭების ციფრები(ლოტოს ციფრები მოცემულია 1 დან 49 შუალედში და

// ასევე მომგებიანია 7 კოჭი) და ასევე შექმენით ფუნქცია რომელსაც
// პარამეტრის სახით გადაეცემა მომხმარებლები და მომგებიანი კოჭები და ეს
// ფუნქცია გამოავლენს მოგებულ მომხმარებელს.

function registerUser() {
    let fullName = prompt("Enter your full name:");
    let personalNumber = prompt("Enter your personal number:");
        
    let selectedNumbers = [];
    for (let i = 0; i < 7; i++) {
        let number = prompt(`Choose lottery number ${i + 1} (1 to 49):`);
        selectedNumbers.push(Number(number));
    }

    return {
        fullName: fullName,
        personalNumber: personalNumber,
        selectedNumbers: selectedNumbers
    };
}

function generateWinningNumbers() {
    let winningNumbers = [];
    for (let i = 0; i < 7; i++) {
        let number = Math.floor(Math.random() * 49) + 1;
        winningNumbers.push(number);
    }
    return winningNumbers;
}

function checkLottery(user, winningNumbers) {
    let counter = 0;
    for (let i = 0; i < user.selectedNumbers.length; i++) {
        if (winningNumbers.includes(user.selectedNumbers[i])) {
            counter++;
        }
    }
    return counter;
}

// Register users
let users = [];
for (let i = 0; i < 3; i++) {
    users.push(registerUser());
}


// Check and display results
for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let counter = checkLottery(user, winningNumbers);
    console.log(`${user.fullName} guessed ${counter} numbers correctly.` , user.selectedNumbers);
}

console.log("Winning Numbers:", generateWinningNumbers());


