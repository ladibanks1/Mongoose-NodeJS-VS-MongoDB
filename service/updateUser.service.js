const model = require("../model/dataSchema.model");

const updateUser = async (id) => {
  try{
    const update = await model.findByIdAndUpdate(id, {$push : {favoriteFoods : "Hamburger"}}, {new : true , runValidators : true});
    if(update){
        console.log(update)
    }else{
        throw new Error("Couldn't Find Document")
    }
  }catch(err){
    console.log(`Error updating document`)
  }
};
module.exports = updateUser;
