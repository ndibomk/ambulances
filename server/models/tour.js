import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  location: {type:String,required:true},
  distance:{type:String,required:true},
  issues:{type:String,required:true},
  name:{type:String},
  creator: String,
  status:{
    type:String,
    enum:['pending','success', 'rejected'],
     default:'pending'
  },
 
  
  createdAt: {
    type: Date,
    default: new Date(),
  },
  
});

const TourModal = mongoose.model("Book", tourSchema);

export default TourModal;
