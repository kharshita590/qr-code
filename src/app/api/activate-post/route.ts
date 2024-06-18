import {connect} from '@/dbConfig/dbConfig'
import QRCode from '@/models/qrCodeSchema'
import { NextRequest,NextResponse } from 'next/server'
connect()

export async function POST(req:NextRequest,res:NextResponse){
    const { searchParams } = new URL(req.url, 'http://localhost');
    const id = searchParams.get('id');
    try{
        // const findQR = await QRCode.findById(id)
        // const {code} = findQR.code
        const reqBody = await req.json()
        const {mobileNo,name,email,link} = reqBody
        // console.log(id)
        const qrCode =await QRCode.findById(id)
        // const code = await qrCode.code
        if(!qrCode){
         return NextResponse.json({message:"qr code does not exists"},{status:404})
     }
         qrCode.details={
                 mobileNo:mobileNo,
                 name:name,
                 email:email, 
                 link:link
         };
         
         qrCode.activated = true
         console.log(qrCode)
         await qrCode.save()
         return NextResponse.json({message:"qr saved successfully"},{status:200})
    }catch(error:any){
        return NextResponse.json({error:"internal server error"},{status:500})
    }
}
     
          
    

// import { connect } from '@/dbConfig/dbConfig';
// import QRCode from '@/models/qrCodeSchema';
// import { NextRequest, NextResponse } from 'next/server';

// connect();

// export async function handler(req:NextRequest, res:NextResponse) {
//     if (req.method === 'GET') {
//         const { searchParams } = new URL(req.url, 'http://localhost');
//         const id = searchParams.get('id');
//         try {
//             const qrCode = await QRCode.findById(id);
//             if (!qrCode) {
//                 return NextResponse.json({ error: "QR code not found" }, { status: 404 });
//             }
//             const code = JSON.parse(qrCode.code);
//             return NextResponse.json({ code }, { status: 200 });
//         } catch (error) {
//             return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//         }
//     }

//     if (req.method === 'POST') {
//         try {
//             const reqBody = await req.json();
//             const { mobileNo, name, email, link, code } = reqBody;

//             // Find the QR code by its code
//             const qrCode = await QRCode.findOne({ code });

//             if (!qrCode) {
//                 return NextResponse.json({ message: "QR code does not exist" }, { status: 404 });
//             }

    
//             qrCode.details = {
//                 mobileNo: mobileNo,
//                 name: name,
//                 email: email,
//                 link: link
//             };
//             qrCode.activated = true;

//             await qrCode.save();
//             return NextResponse.json({ message: "QR code saved successfully" }, { status: 200 });
//         } catch (error) {
//             return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//         }
//     }

//     return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
// }
