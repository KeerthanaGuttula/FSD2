"use strict";
// 1. Using the 'any' type
let flexibleValue = 10;
flexibleValue = "Now I am a string";
flexibleValue = true;
// 2. Using the 'unknown' type
let mysteryValue = "Hello Vishnu";
// let length: number = mysteryValue.length; // Error
if (typeof mysteryValue === "string") {
    console.log("Length of unknown string: " + mysteryValue.length);
}
// 3. Using the 'void' type
function logNotification(message) {
    console.log("ALERT: " + message);
}
logNotification("Environment Setup Complete!");
