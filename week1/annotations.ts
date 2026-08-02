// Variable Annotations
let movieTitle: string = "Baahubali: The Beginning";
let releaseYear: number = 2015;
let isBlockbuster: boolean = true;

// Function Parameter and Return Type Annotations
function getMovieStatus(title: string, year: number): string {
    return `${title} was a massive hit released in ${year}`;
}

// Array Annotation
let leadActors: string[] = [
    "Prabhas",
    "Rana Daggubati",
    "Anushka Shetty",
    "Tamannaah"
];

// Using annotated variables and functions
const summary: string = getMovieStatus(movieTitle, releaseYear);

console.log(summary);
console.log(`Starring: ${leadActors.join(", ")}`);
console.log(`Is it a blockbuster? ${isBlockbuster ? "Yes, Jai Mahishmati!" : "No"}`);

// movieTitle = 2015; // Error: Type 'number' is not assignable to type 'string'