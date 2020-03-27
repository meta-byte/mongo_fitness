var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
    day: { type: Date, default: Date.now },
    exercises: [{
        type: {
            type: String,
            trim: true,
        },
        name: {
            type: String,
            trim: true,
        },
        weight: {
            type: Number,
            trim: true,
        },
        reps: {
            type: Number,
            trim: true,
        },
        sets: {
            type: Number,
            trim: true,
        },
        duration: {
            type: Number,
            trim: true,
        },
        distance: {
            type: Number,
            trim: true,
        },

    }],
});

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;