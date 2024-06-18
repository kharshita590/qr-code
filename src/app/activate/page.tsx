"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";


export default function ActivateQR(){
    const router = useRouter()
    const [details,setDetails] = React.useState({
        name:"",
        mobileNo:"",
        email:"",
        link:""
    })
    const activate = async()=>{
        try{
            const response = await axios.post("http://localhost:3009/api/activate-post?id=${id}",details)
            console.log(response.data)
            toast.success("activated")

        }catch(error:any){
            toast.error(error.message)

        }
    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-white font-mono text-xl">Activate QR</h1>
        <hr />
        
        <label htmlFor="name">Name</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="name"
            type="text"
            value={details.name}
            onChange={(e) => setDetails({...details, name: e.target.value})}
            placeholder="Name"
            />
        <label htmlFor="mobileNo">Mobile Number</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="mobileNo"
            type="number"
            value={details.mobileNo}
            onChange={(e) => setDetails({...details, mobileNo: e.target.value})}
            placeholder="Mobile Number"
            />

<label htmlFor="email">Email</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="text"
            value={details.email}
            onChange={(e) => setDetails({...details, email: e.target.value})}
            placeholder="Email"
            />

<label htmlFor="Link">Desired Link</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="link"
            type="text"
            value={details.link}
            onChange={(e) => setDetails({...details, link: e.target.value})}
            placeholder="Link"
            />
      


            <button
            onClick={activate}
            className="p-3 font-mono border mt-4 text-white border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Activate</button>
            {/* <Link href="/signup">Visit Signup page</Link> */}
        </div>
    )
}


