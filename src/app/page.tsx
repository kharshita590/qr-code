"use client"
import Image from "next/image";
import {useRouter} from "next/navigation";
export default function Home() {
  const router = useRouter()
  const  generate = ()=>{
   
       router.push('./signup')

  }
  return (
    <main>
     <div>
      <div className="w-[8px] h-[14rem] bg-white ml-[45rem] bg-gradient-to-t from-blue-500 via-purple-500 to-green-500" ></div>
      <div className="w-[16rem] h-[8rem] bg-purple-500 ml-[37.5rem] rounded-tl-full rounded-tr-full border-b-4  border-5 border-t-[0px] hii"></div>
      <div className="w-[2rem] h-[2rem] ml-[45rem] bg-purple-500 rounded-full shadow-custom mt-[-1rem]"></div>
      <div className="w-[353px] h-0 border-b-[500px] border-b-[rgba(120,60,216,0.24)] border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent absolute left-0 right-[1rem] top-[330px] mx-auto z-[1] rounded-t-[90px]"></div>
      <button className="w-[7rem] h-[3rem] bg-purple-300 flex flex-row ml-[42rem] mt-[8rem] justify-center items-center font-mono " onClick={generate}>Generate</button>


     </div>
    </main>
   
  );
}
