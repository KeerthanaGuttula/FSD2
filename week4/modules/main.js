"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ticketlogic_1 = require("./ticketlogic");
const traveler = {
    name: "Suresh Kumar",
    age: 45,
    berthPreference: "Lower"
};
const myTicket = new ticketlogic_1.Ticket(traveler, 1200, 12626);
myTicket.printTicket();
