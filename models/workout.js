var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
    day: { type: Date, default: () => new Date() },
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
},
    {
        toJSON: {
            // include any virtual properties when data is requested
            virtuals: true
        }
    }
);

// adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;