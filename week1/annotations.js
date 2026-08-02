"use strict";
// Variable Annotations
let movieTitle = "Baahubali: The Beginning";
let releaseYear = 2015;
let isBlockbuster = true;
// Function Parameter and Return Type Annotations
function getMovieStatus(title, year) {
    return `${title} was a massive hit released in ${year}`;
}
// Array Annotation
let leadActors = [
    "Prabhas",
    "Rana Daggubati",
    "Anushka Shetty",
    "Tamannaah"
];
// Using annotated variables and functions
const summary = getMovieStatus(movieTitle, releaseYear);
console.log(summary);
console.log(`Starring: ${leadActors.join(", ")}`);
console.log(`Is it a blockbuster? ${isBlockbuster ? "Yes, Jai Mahishmati!" : "No"}`);
// movieTitle = 2015; // Error: Type 'number' is not assignable to type 'string'
