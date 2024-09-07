const model = require("../model/dataSchema.model");

const findUser = async () => {
  try {
    const find = await model.find({ name: "John" });
    console.log(find);
  } catch (err) {
    console.log(`Error finding document ${err.message}`);
  }
};
module.exports = findUser;