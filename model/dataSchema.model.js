const { Schema, model } = require("mongoose");
// Created A schema for the database
const personSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFoods : [String]
});
module.exports = model("user", personSchema);
