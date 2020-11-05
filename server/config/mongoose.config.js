const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/juices")
    .then(() => console.log("Database is connected"))
    .catch((err) => console.log(err));