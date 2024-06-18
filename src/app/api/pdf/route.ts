import {PDFDocument, StandardFonts,rgb} from 'pdf-lib'
import {connect} from '@/dbConfig/dbConfig'
import QRCode from '@/models/qrCodeSchema'
import { NextRequest,NextResponse } from 'next/server'
connect()

export async function GET(request:NextRequest){
    const pdfDoc = await PDFDocument.create()
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

    const page = pdfDoc.addPage()
    const {width,height} = page.getSize()
    const fontSize = 30
    const text = await QRCode.find({}).exec()
    const textArray = text.map((data) => JSON.stringify(data, null, 2));
    const textJoin = textArray.join('/n')
    page.drawText(textJoin,{
        x:50,
        y:height-4*fontSize,
        font:timesRomanFont,
        color: rgb(0, 0.53, 0.71),
    })
    const pdfBytes = await pdfDoc.save()

    return NextResponse.json({pdfBytes})
}



// import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

// async function createPdf() {
//   const pdfDoc = await PDFDocument.create()
//   const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

//   const page = pdfDoc.addPage()
//   const { width, height } = page.getSize()
//   const fontSize = 30
//   page.drawText('Creating PDFs in JavaScript is awesome!', {
//     x: 50,
//     y: height - 4 * fontSize,
//     size: fontSize,
//     font: timesRomanFont,
//     color: rgb(0, 0.53, 0.71),
//   })

//   const pdfBytes = await pdfDoc.save()
// }