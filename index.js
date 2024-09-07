// Importing required modules and services
const mongoose = require('mongoose');
const createUser = require('./service/createUser.service');
const createManyUser = require('./service/createManyUser.service');
const findUser = require('./service/findUser.service');
const findOneUser = require('./service/findOneUser.service');
const findById = require('./service/findById.service');
const updateUser = require('./service/updateUser.service');
const findAndUpdate = require('./service/findOneAndUpdate.service');
const deleteOne = require("./service/deleteOne.service");
const chain = require('./service/query.service');
const deleteMany = require("./service/deleteMany.service");

// MongoDB connection URI
const uri = process.env.MONGO_URI

// Function to connect to the database and perform operations
const connectToDatabase = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(uri);
        console.log("Connection Successful");
        
        // Array of operations to be performed
        const operations = [
            createUser(),
            createManyUser(),
            findUser(),
            findOneUser(),
            findById("66dbe717d04451871a9341c5"),
            updateUser("66dbe717d04451871a9341c5"),
            findAndUpdate("Ola"),
            deleteOne("Ola"),
            deleteMany("Ola"),
            chain()
        ];

        // Execute all operations concurrently
        await Promise.all(operations);
    } catch (error) {
        console.log("Error Connecting", error.message);
    } finally {
        // Disconnect from MongoDB
        await mongoose.disconnect();
    }
}

// Call the function to connect to the database and execute operations
connectToDatabase();