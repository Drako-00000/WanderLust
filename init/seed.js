const mongoose = require("mongoose");
const sampleData = require("./data");
const Listing = require("../models/listing");

require("dotenv").config();

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.ATLASDB_URL);

    await Listing.deleteMany({});
    await Listing.insertMany(sampleData.data); 

    console.log("Data successfully seeded to MongoDB Atlas!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding data:", err);
  }
};

seedDB();
