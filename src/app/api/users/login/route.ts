import {connect} from '@/dbConfig/dbConfig';
import User from "@/models/userModel"
import { NextRequest,NextResponse } from 'next/server';
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken'
connect()

export async function POST(request:NextRequest){
    try{
       const reqBody= await request.json()
       const {email,password} = reqBody;

       console.log(reqBody)

       const user = await User.findOne({email})
       if(!user){
        return NextResponse.json({error:"user does not exists"},{status:400})
       }

       //check if pass is correct
       const validPassword = await bcryptjs.compare
       (password,user.password)
       if(!validPassword){
        return NextResponse.json({error:"invalid password"},{status:400})
       }

       //create token
       const tokenData={
        id:user._id,
        username:user.username,
        email:user.email
       }

       const token = await jwt.sign(tokenData,process.env.JWT_SECRET_KEY!,{expiresIn:"1h"})

       const response = NextResponse.json({
        message:"success",
        success:true
       })
       response.cookies.set("token",token,{
        httpOnly:true,
       })
       return response;

    }catch(error:any){
        return NextResponse.json({error:error.message},{status:500})
    }
}