var mongoose =require("mongoose");
var Schema=mongoose.Schema;


var movie=new Schema({
wavename:String,
wavetype:String,
location:String,
noofparticipant:Number,
plannedstartdate:String,
plannedenddate:String,
actualstartdate:String,
actualenddate:String,
participantmovingout:Number,

});
module.exports=mongoose.model('Batch',Batch);
