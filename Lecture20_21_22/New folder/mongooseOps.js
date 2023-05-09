const mongoosed = require("mongoose")
const connectionString = "mongodb://127.0.0.1:27017/bootcamp";

async function mongoOps() {
    const mongoose = await mongoosed.connect(connectionString)
    debugger;

    const ownerSchema = new mongoose.Schema({
        name: String
    })
    const Owner = mongoose.model("Owner", ownerSchema)
    const houseSchema = new mongoose.Schema({
        street: String,
        city: String,
        state: String,
        zip: String,
        owner: { type: mongoose.Types.ObjectId, ref: "Owner" }
    })
    const House = mongoose.model("House", houseSchema)

    // Create a Owner
    //const alex = await Owner.create({ name: "Alex Merced" })
    // Create a new house
    const h = await House.create({
        street: "100 Maple Street",
        city: "Fort Townville",
        state: "New West Virgota",
        zip: "77777",
        owner: { name: "Alex Merced" }
    })
    // query for all houses, use populate to include owner info
    const housesss = await House.find({}).populate("owner");
    housesss.forEach((rec, index) => {

    })
    const ownerOfTheFirstHouse = housesss[0].owner;
    const a = housesss.length;


}

mongoOps();


