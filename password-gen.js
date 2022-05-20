var genE1 = document.querySelector("#gen");
var lengthCompare = 7;
var lowerCaseLetters = "qwertyuiopasdfghjklzxcvbnmz";
var upperCaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM"
var numbers = "1234567890";
var symbols = "!@#$%^&*()";

var userChoice = [];

var password = [""];

genE1.addEventListener("click", function () {
    /*Asking for the password length */
    var passwordLength = window.prompt("Pick the Length of the Password:"); if (
        passwordLength <= lengthCompare) {
        window.alert("All Passwords should be 8 or more digits long.")
        return;
    }

    var lowerAllow = window.confirm("Do you want lower case letters:"); if (
        lowerAllow) {
        for (var i = 0; i < 24; i++) {
            userChoice.push(lowerCaseLetters[i])
        }
    }

    var upperAllow = window.confirm("Do you want upper case letters:"); if (
        upperAllow) {
        for (var i = 0; i < 24; i++) {
            userChoice.push(upperCaseLetters[i])
        }
    }

    var numberAllow = window.confirm("Do you want numbers:"); if (
        numberAllow) {
        for (var i = 0; i < 10; i++) {
            userChoice.push(numbers[i])
        }
    }

    var symbolAllow = window.confirm("Do you want symbols:"); if (
        symbolAllow) {
        for (var i = 0; i < 10; i++) {
            userChoice.push(symbols[i])
        }
    }

    for (var i = 0; i < passwordLength; i++) {
        password[i] = userChoice[Math.floor(Math.random() * (userChoice.length))];
    }

    var withoutCommas = password.join("");

    window.alert(withoutCommas);
    userChoice = [];
})