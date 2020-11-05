const mongoose = require("mongoose");

const JuiceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be more than 2 characters long"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [4, "Description must be more than 3 characters long"]
    },
    type: {
        type: String,
        required: [true, "Type is required"],
        minlength: [2, "Type must be more than 1 character long"]
    },
    comments: {
        type: Array,
        minlength: [5, "Comment must be more than 4 character long"]
    },
    ingredients: {
      type: Array,
    },
    url: {
        type: String,
    },
    favorite: {
        type: Boolean
    }
}, {timestamps: true})

const Juice = mongoose.model("Juice", JuiceSchema);
module.exports = Juice;