import mongoose from 'mongoose';

const qrCodeSchema = new mongoose.Schema({
    code:{
       type:String
    },
    activated:{
        type:Boolean,
        default:false
    },
    details:{
        mobileNo:Number,
        email:String,
        name:String,
        link:String
    }
})
const QRCode = mongoose.models.QRCode || mongoose.model('QRCode',qrCodeSchema);
export default QRCode