// QUESTION 1 START 
// var firstName = prompt("Enter First Name")
// var LastName = prompt("Enter Last Name")
// var fullName = firstName + LastName

// alert(fullName);
// QUESTION 1 END 


// QUESTION 2 START 

// var favorPhone = prompt("Wrtie your favorite Phone");
// var favorLength = favorPhone.length;

// alert(favorLength);

// QUESTION 2 END 


// QUESTION 3 START 

// var stringOne = "Pakistani"
// var indexOfStringOne = stringOne.indexOf("n")
// alert(indexOfStringOne)

// QUESTION 3 END 

// QUESTION 4 START 

// var stringOne = "Hello World"
// var indexOfStringOne = stringOne.lastIndexOf("l")
// alert(indexOfStringOne)

// QUESTION 4 END 

// // QUESTION 5 START 

// var stringOne = "Pakistani"
// var indexOfStringOne = stringOne.charAt(3)
// alert(indexOfStringOne)

// // QUESTION 5 END 

// QUESTION 6 START 

// var firstName = prompt("Enter First Name")
// var LastName = prompt("Enter Last Name")
// var fullName = `${firstName}${LastName}`

// alert(fullName);

// QUESTION 6 END 

// QUESTION 7 START 

// var stringOne = "Hyderabad"
// var indexOfStringOne = stringOne.replace("Hyder","Islam")
// alert(indexOfStringOne)

// QUESTION 7 END 

// // QUESTION 8 START 

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var indexOfStringOne = message.replaceAll("and", "&")
// alert(indexOfStringOne)

// // QUESTION 8 END 


// // QUESTION 9 START 

// var stringTwo = "472";
// alert(stringTwo)
// alert(typeof(stringTwo))
// var stringTwoConvert = parseInt(stringTwo)
// alert(stringTwo)
// alert(typeof(stringTwoConvert))

// // QUESTION 9 END 

// QUESTION 10 START
// var takeInput = prompt("Write any words").toUpperCase()
// alert(takeInput)

// QUESTION 10 END

// QUESTION 11 START
// var takeInput = prompt("Write any word").toLowerCase()
// var titleCase = takeInput.slice(0,1).toLocaleUpperCase() + takeInput.slice(1)
// alert(titleCase)

// QUESTION 11 END

// QUESTION 12 START

// var num = 35.36;
// var convertNum = num.toString()
// var replaceNum = convertNum.replaceAll(".","")
// alert(replaceNum)  
// alert(typeof(replaceNum))


// QUESTION 12 END


// // QUESTION 13 START

// var userName = prompt("Write a username")

// if(userName.includes("!") || userName.includes(",") || userName.includes(".") || userName.includes("@") ){
//     alert("Enter Correct User Name")
//     userName = prompt("Enter Correct User Name")
//     alert(userName)
// }else{
//     alert(userName)
// }

// // QUESTION 13 END 


// // QUESTION 14 START

// var arrayOne = ["cake", "apple pie", "cookie", "chips", "patties"];
// var takeInput = prompt("Write Order").toLowerCase();
// var itemFound = false;
// var itemIndex = -1;

// for (let i = 0; i < arrayOne.length; i++) {
//     if (takeInput === arrayOne[i].toLowerCase()) {
//         itemFound = true;
//         itemIndex = i
//         break;
//     }
// }

// if (itemFound) {
//     alert(takeInput + " is available.");
//     alert(itemIndex)    
// } else {
//     alert("We are sorry, " + takeInput + " is not available.");
// }

// // QUESTION 14 END

// QUESTION 15 START

// var password = prompt("Please enter a password:");

// if (password.length < 6) {
//     alert("Password must be at least 6 characters long.");
// } else if (password[0] >= '0' && password[0] <= '9') {
//     alert("Password should not start with a number.");
// } else {
//     var passwordLetter = false;
//     var passwordNumber = false;
    
//     // Check each character in the password
// for (let i = 0; i < password.length; i++) {
//         if (password[i] >= 'a' && password[i] <= 'z') {
//             passwordLetter = true; 
//         } else if (password[i] >= 'A' && password[i] <= 'Z') {
//             passwordLetter = true; 
//         } else if (password[i] >= '0' && password[i] <= '9') {
//             passwordNumber = true; 
//         }
//     }
//     }
    
//     // Final validation
//     if (passwordLetter && passwordNumber) {
//         alert("Your password is valid: " + password);
//     } else {
//         alert("Password must contain both letters and numbers.");
// }
// Check if the password is valid




// QUESTION 15 END

// QUESTION 16 START

// var university = "University of Karachi";

// // console.log(university)
// var checkUni = university.split()

// console.log(checkUni)
// QUESTION 16 END 

// QUESTION 17 START 

// var userInput = prompt("ENTER A WORD").toUpperCase();

// // console.log(university)
// var checkInput = userInput[userInput.length - 1]

// console.log(checkInput)

// QUESTION 17 END 



// QUESTION 18 START 

// var sentence = "The quick brown fox jumps over the lazy dog";

// var lowerCaseSentence = sentence.toLowerCase();

// var wordsArray = lowerCaseSentence.split(' ');
// console.log(wordsArray)

// var wordToCount = "the";

// var count = 0;

// for(i = 0; i < wordsArray.length; i++){
//     if(wordsArray[i] === wordToCount){
//         count++;
//     }
// }

// console.log(`The word '${wordToCount}' appears ${count} times.`);

// QUESTION 18 END 

