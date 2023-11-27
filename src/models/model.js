const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    email:{
      type:String,required:true , unique:true
      },
    password:{
      type:String,required:true
      }
          },{
            timestamps:true
          });
  
const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;