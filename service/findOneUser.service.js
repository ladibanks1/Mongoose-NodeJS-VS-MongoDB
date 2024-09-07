const model = require("../model/dataSchema.model");

const findOneUser = async () => {
  try {
    const find = await model.findOne({ favoriteFoods: "Fufu" });
    console.log(find);
  } catch (err) {
    console.log(`Error finding document ${err.message}`);
  }
};
module.exports = findOneUser;
