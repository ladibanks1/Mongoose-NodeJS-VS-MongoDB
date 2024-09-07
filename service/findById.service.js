const model = require("../model/dataSchema.model");

const findUser = async (id) => {
  try {
    const find = await model.findById(id);
    if (find) {
      console.log(find);
    }
    throw new Error("Couldn't Find Document");
  } catch (err) {
    console.log(`Error finding document ${err.message}`);
  }
};
module.exports = findUser;
