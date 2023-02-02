// require mongoose and destructor Schema and model from it
const { Schema, model } = require("mongoose");
//Create a viking schema here
//<======Don't forget Module.export ============>
//<================Schema=====================>
const vikingSchema = new Schema({
   firstName : {
    type: String,
    required: true,
    unique: true
   },
   familyName : {
    type : String,
    required : true,
   },
   strength : Number,
   weapon: String
})

// The model
const vikingModel = model("vikings", vikingSchema);
module.exports = vikingModel;
