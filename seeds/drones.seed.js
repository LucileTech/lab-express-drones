// Iteration #1

// // ℹ️ package responsible to make the connection with mongodb
// // https://www.npmjs.com/package/mongoose
// const mongoose = require("mongoose");

// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./../db");

const Drone = require("./../models/Drone.model.js");

const initialDrone = [
  {
    name: "Odin",
    propellers: 2,
    maxSpeed: 16,
  },
  {
    name: "Odinette",
    propellers: 3,
    maxSpeed: 17,
  },
  {
    name: "Odinetinou",
    propellers: 4,
    maxSpeed: 18,
  },
];

seed();

async function seed() {
  await Drone.deleteMany();
  console.log("all drones: ", initialDrone);
  await Drone.create(initialDrone);
}
