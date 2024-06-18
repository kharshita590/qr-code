
// "use client"
// import Link from "next/link";
// import React, { useEffect, useReducer,useState } from "react";
// import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
// import { connect} from '@/dbConfig/dbConfig'
// import QRCode from "@/models/qrCodeSchema";
// type QRCodeType={
//     code:string
// }
// export const getServerSideProps = (async()=>{
//     await connect()
//     const qrCodes = await QRCode.find().lean()
//     return{
//         props:{
//             qrCodes:qrCodes.map(qrCode=>({
//                 ...qrCode,
//                 code:qrCode.code
//             }))
//         }
//     }
//     // const res = await fetch(' http://localhost:3009/api/qr-code')
//     // const repo:Repo = await res.json()
//     // return{props:{repo}}

// })satisfies GetServerSideProps<{qrCodes:QRCodeType[]}>


// export default function Page({
//     qrCodes
//   }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//     return (
//       <main>
//        <div>
//         {qrCodes.map((qrCode,index)=>(
//             <img key={index} src={qrCode.code} alt={`QR Code ${index+1}`}></img>
//         ))}
//        </div>
//       </main>
//     )
//   }

"use client"


import Link from "next/link";
import React, { useEffect, useReducer,useState } from "react";
import { PDFDocument } from 'pdf-lib'
import fs from 'fs'
import path from 'path'
// const fs = require('fs');
// const path = require('path');
type QRCodeType={
    code:string
}

    const showQr = ()=>{
        const [qrCodes,setQrCodes] = useState<QRCodeType[]>([]);
       
       useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch('/api/qr-code')
            const data = await res.json()
            Buffer.from(data.qrCodes,'base64').toString()
            console.log(data)
            setQrCodes(data.qrCodes)
        };
        fetchData()
       },[])
//        let image = new Blob([byteArray], { type: 'image/jpeg' });
// let imageUrl = URL.createObjectURL(image);
// this.setState({image: imageUrl});

       
    
    return(
        <main>
            <div className="flex flex-row  items-center justify-center ">
    {qrCodes.map((qrCode,index)=>(
        <img key={index} src={`data:image/png;base64,${qrCode}`} alt={`QR Code ${index}`} className="ml-[5rem] w-[130rem]"/>
    ))}
    </div>
        </main>
    )
    }

export default showQr;