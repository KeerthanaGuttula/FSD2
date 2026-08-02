// 1. Using the 'any' type
let flexibleValue: any = 10;
flexibleValue = "Now I am a string";
flexibleValue = true;

// 2. Using the 'unknown' type
let mysteryValue: unknown = "Hello Vishnu";

// let length: number = mysteryValue.length; // Error

if (typeof mysteryValue === "string") {
    console.log("Length of unknown string: " + mysteryValue.length);
}

// 3. Using the 'void' type
function logNotification(message: string): void {
    console.log("ALERT: " + message);
}

logNotification("Environment Setup Complete!");