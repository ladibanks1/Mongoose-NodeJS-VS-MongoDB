const model = require("../model/dataSchema.model");

const findAndUpdate = async (personName) => {
  try {
    const update = await model.findOneAndUpdate(
      { name: personName },
      { age: 20 },
      { new: true }
    );
    console.log(update);
  } catch (err) {
    console.log("Error updating Document");
  }
};
module.exports = findAndUpdate
