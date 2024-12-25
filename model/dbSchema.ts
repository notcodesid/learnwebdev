import mongoose from "mongoose";

const StepSchema = new mongoose.Schema({
    title : { type : String , required : true}
})

const SectionSchema = new mongoose.Schema ({
    title : { type : String , requied : true},
    steps : [StepSchema]
})

const WeekSehema = new mongoose.Schema ({
    _id : { type : String , required : true }  ,
    title : {type : String , required : true},
    workNumber : {type : Number , required : true},
    totallectures : {type : Number , required : true},
    section : { }
})

export const Week = mongoose.model("Week" , WeekSehema)

