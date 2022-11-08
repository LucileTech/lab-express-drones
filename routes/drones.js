const express = require("express");
const router = express.Router();
const Drone = require("./../models/Drone.model");

// require the Drone model here

router.get("/drones", async (req, res, next) => {
  try {
    const allDrones = await Drone.find();
    res.render("drones/list", { allDrones });
  } catch (error) {
    next(error);
  }
  // Iteration #2: List the drones
  // ... your code here Use the Mongoose .find() method to retrieve all the drones. Display all the drones on the drones/list.hbs view. Make sure you catch the error and output it to the terminal.
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here // Show a form to create a drone
  try {
    res.render("drones/create-form");
  } catch (error) {
    next(error);
  }
});

router.post("/drones/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here // Save a drone to the database
  const { name, propellers, maxSpeed } = req.body;
  try {
    await Drone.create({ name, propellers, maxSpeed });
    res.redirect("/drones");
  } catch (error) {
    next(error);
  }
});

router.get("/drones/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here Show a form to update a drone
  try {
    const myDrone = await Drone.findById(req.params.id);
    res.render("drones/update-form", { myDrone });
  } catch (error) {
    next(error);
  }
});

router.post("/drones/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here Save updated drone to the database
  try {
    const updatedDrone = await Drone.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    console.log(updatedDrone);
    res.redirect("/drones");
  } catch (error) {
    next(error);
  }
});

router.post("/drones/:id/delete", async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  try {
    await Drone.findByIdAndDelete(req.params.id);
    res.redirect("/drones");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
