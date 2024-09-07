const model = require("../model/dataSchema.model")

const deleteMany = async(personName) => {
    try {
        const del = await model.deleteMany({name : personName })
        console.log(del)
    } catch (error) {
        console.log("Error deleting document")
    }
}
module.exports = deleteMany