"use strict";
function identity(value) {
    return value;
}
console.log(identity(10));
console.log(identity("Hello"));
function getFirstPackage(items) {
    return items[0];
}
function wrapInBox(item) {
    return {
        parcel: item,
        timestamp: new Date()
    };
}
const cities = ["Mumbai", "Delhi", "Bangalore"];
const firstCity = getFirstPackage(cities);
console.log(`Sending first parcel to: ${firstCity.toUpperCase()}`);
const pincodes = [400001, 110001, 560001];
const firstPin = getFirstPackage(pincodes);
console.log(`Starting delivery at Pincode: ${firstPin}`);
const phone = {
    brand: "Samsung",
    model: "S24"
};
const packedPhone = wrapInBox(phone);
console.log(`Packed item: ${packedPhone.parcel.brand} at ${packedPhone.timestamp}`);
const autoCity = getFirstPackage(cities);
