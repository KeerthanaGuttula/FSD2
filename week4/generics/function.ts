function identity<T>(value: T): T {
    return value;
}

console.log(identity<number>(10));
console.log(identity<string>("Hello"));

function getFirstPackage<T>(items: T[]): T {
    return items[0];
}

function wrapInBox<T>(item: T): {
    parcel: T;
    timestamp: Date;
} {
    return {
        parcel: item,
        timestamp: new Date()
    };
}

const cities = ["Mumbai", "Delhi", "Bangalore"];
const firstCity = getFirstPackage<string>(cities);

console.log(`Sending first parcel to: ${firstCity.toUpperCase()}`);

const pincodes = [400001,110001,560001];
const firstPin = getFirstPackage<number>(pincodes);

console.log(`Starting delivery at Pincode: ${firstPin}`);

interface Electronic{
    brand:string;
    model:string;
}

const phone:Electronic={
    brand:"Samsung",
    model:"S24"
};

const packedPhone=wrapInBox<Electronic>(phone);

console.log(`Packed item: ${packedPhone.parcel.brand} at ${packedPhone.timestamp}`);

const autoCity=getFirstPackage(cities);