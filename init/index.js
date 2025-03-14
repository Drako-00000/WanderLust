const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");
const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

// console.log(data);

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
};

const initDB = async () => {
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj) => {
        return {
            ...obj,
            owner: "67acad9b22dee7c767bba5f6",
        };
    });    
    await Listing.insertMany(initdata.data);
    console.log("Data was initialized");
};

initDB();