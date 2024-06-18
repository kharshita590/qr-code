import { NextRequest,NextResponse } from "next/server";
import express,{ Request, Response } from 'express';
// const QRCodeStyling = require('qr-code-styling');
import {connect} from '@/dbConfig/dbConfig';
import QRCode from '@/models/qrCodeSchema';

connect()

export async function GET(request: NextRequest) {
    try {
        const qrCode=require('qrcode')
        const qrCodes: String[] = [];

        for (let i = 0; i < 100; i++) {       
            const qrOption={
                margin:37,
                width:275
            }
            const qrString="http://localhost:3009/activate"
            const qrCodeData = await qrCode.toDataURL(qrString,qrOption)
            const base = qrCodeData.split(',')[1]
            // const qrCodeData = await qrCode.getRawData('jpeg'); 
            qrCodes.push(base);
        }
       const jsonString: string = JSON.stringify(qrCodes);
       const qrCodeSave=new QRCode({
        code:jsonString
       })
       await qrCodeSave.save();
       console.log("qr code saved successfully")
    
       return NextResponse.json({ qrCodes });
    } catch (error: any) {
        console.error('Error generating QR codes:', error);
        return NextResponse.json({error:"internal server error"},{status:500});
    }
}

// import express, { Request, Response } from 'express';
// const QRCodeStyling = require('qr-code-styling');
// const router = express.Router();
// const port = 3003;
// const app=express()

// router.post('/generate', async (req: Request, res: Response) => {
//     try {
//         const qrCode = require('qrcode')
//         const qrCodes: String[] = [];

//         for (let i = 0; i < 100; i++) {
//             // const qrCode = new QRCodeStyling({
//             //     width: 300,
//             //     height: 300,
//             //     type: "svg",
//             //     data: "https://www.facebook.com/",
//             //     image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
//             //     dotsOptions: {
//             //         color: "#4267b2",
//             //         type: "rounded"
//             //     },
//             //     backgroundOptions: {
//             //         color: "#e9ebee",
//             //     },
//             //     imageOptions: {
//             //         crossOrigin: "anonymous",
//             //         margin: 20
//             //     }
//             // });
//             const qrOption={
//                 margin:7,
//                 width:175,
//             }
//             const qrString = "QR_STRING"
//             const qrCodeData = await qrCode.toDataURL(qrOption,qrString);
//             qrCodes.push(qrCodeData);
            
//         }
//         console.log(qrCodes)
//         return res.json({ qrCodes });
//     } catch (error: any) {
//         console.error('Error generating QR codes:', error);
//         res.status(500).json({ error: 'Error generating QR codes' });
//     }
// });

// export default router;