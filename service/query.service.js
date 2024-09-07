const model = require('../model/dataSchema.model');

const chainQuery = async (personName) => {
    const result = await model.find({name : personName}).sort({name : 1}).limit(2).select({age : -1})
    console.log(`Result ${result}`)
}
module.exports = chainQuery