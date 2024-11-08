const mongoose = require("mongoose");

const instanceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    participants:{
        type:Array,
        default:[]
    },
    tickets:{
        type:Array,
        default:[]
    },
    alloted:{
        type:Number,
        default:0
    },
    checkin:{
        type:Number,
        default:0
    }
});

const Instance = mongoose.model("Instance",instanceSchema);

module.exports=Instance;