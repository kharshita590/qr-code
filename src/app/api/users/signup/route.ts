import {connect} from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest,NextResponse } from 'next/server';
import bcryptjs from "bcryptjs";

connect()

export async function POST(request:NextRequest){
    try{
        const reqBody = await request.json()
        const {username,email,password}=reqBody
        // console.log(reqBody)
        const user = await User.findOne({email})
        // console.log(user)

        if(user){
            return NextResponse.json({error:"user already exists"},{status:400})
        }

        //hashing

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword=await bcryptjs.hash
        (password,salt)

        const newUser = new User({
            username:username,
            email:email,
            password:hashedPassword
        })

        const savedUser = await newUser.save()

        console.log(savedUser)

        return NextResponse.json({message:"user created sucessfully"},{status:200})


    }catch(error:any){
        return NextResponse.json({error:"internal server error"},{status:500})

    }
}





// import {connect} from '@/dbConfig/dbConfig';
// import User from "@/models/userModel"
// import { NextRequest,NextResponse } from 'next/server';
// import bcryptjs from "bcryptjs";



