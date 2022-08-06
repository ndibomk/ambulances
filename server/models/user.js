import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true,unique:true },
  phone: { type: Number},
  password: { type: String },
  id: { type: String },
  isAdmin:{type:Boolean,default:false},
  dob:{type:Date},
    aob:{type:String},
    bloodGroup:{type:String},
    
    allergy:{type:String},
});

export default mongoose.model("User", userSchema);
