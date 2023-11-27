
const mongoose = require("mongoose");  
export default function dbconnection() {
    main().catch((err) => console.log(err));
    async function main() {
      await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.pbqxnfj.mongodb.net/?retryWrites=true&w=majority `
      );
      console.log("database is connected");
    }
}
