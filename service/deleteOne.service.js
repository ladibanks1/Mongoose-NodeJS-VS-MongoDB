const model = require("../model/dataSchema.model")

const deleteOne = async(personName) => {
    try {
        const del = await model.findOneAndDelete({name : personName })
        console.log(del)
    } catch (error) {
        console.log("Error deleting document")
    }
}
module.exports = deleteOne