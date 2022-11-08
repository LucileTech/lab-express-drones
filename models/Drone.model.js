// Iteration #1

const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const droneSchema = new Schema(
  {
    name: {
      type: String,
      //   trim: true,
      //   required: false,
    },

    propellers: {
      type: Number,
      //   trim: true,
      //   required: false,
    },
    maxSpeed: {
      type: Number,
      //   trim: true,
      //   required: false,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Drone = model("Drone", droneSchema);
module.exports = Drone;
