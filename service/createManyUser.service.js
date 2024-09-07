const model = require("../model/dataSchema.model");

const createManyUser = async () => {
  try{
    const users = await model.create([
    {
      name: "John",
      age: 199,
      favoriteFoods: ["Spag", "Egg"],
    },
    {
        name : "Joe",
        age : 100,
        favoriteFoods : ["Rice" , "Stew"]
    }
  ]);
  console.log(users)
}catch(err){
    console.log(`Error creating many users ${err.message}`)
}
};

module.exports = createManyUser;
