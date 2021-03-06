const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    items:{type:Object,required:true},
    phone:{type:String,required:true},
    address:{type:String,required:true},
    paymentType:{type:String,default:'COD'},
    status:{type:String,default:'Order placed'},
    created_at:{type:Date,default:Date.now}
});

module.exports = mongoose.model('order',OrderSchema);