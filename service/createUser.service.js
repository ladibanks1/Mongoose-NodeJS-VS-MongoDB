const model = require("../model/dataSchema.model");
const createUser = async () => {
  try {
    const user = new model({
      name: "Ola",
      age: 10,
      favoriteFoods: ["Fufu", "Apku"],
    });
    await user.save();
    console.log(user);
  } catch (error) {
    console.log(`Error creating a document ${error.message}`)
  }
};
module.exports = createUser;
