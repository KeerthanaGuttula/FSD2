// 1. Traditional Function
function calculateTotalTraditional(price: number, taxRate: number): number {
    return price + (price * taxRate);
}

// 2. Arrow Function
const calculateTotalArrow = (price: number, taxRate: number): number => {
    return price + (price * taxRate);
};

// 3. Shorthand Arrow Function
const getWelcomeMessage = (theatre: string): string =>
    `Welcome to ${theatre} Cinemas!`;

// Testing
const ticketPrice: number = 250;
const gstRate: number = 0.18;

console.log(getWelcomeMessage("PVR"));

const total1 = calculateTotalTraditional(ticketPrice, gstRate);
console.log(`Total (Traditional): ₹${total1}`);

const total2 = calculateTotalArrow(ticketPrice, gstRate);
console.log(`Total (Arrow): ₹${total2}`);