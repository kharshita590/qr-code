import mongoose from 'mongoose';

export async function connect (){
    try{
      mongoose.connect(process.env.MONGO_URL!)
      const connection=mongoose.connection;

      connection.on("connected",()=>{
        console.log("mongodb connected successfullyyyyy")
      })

      connection.on("error",()=>{
        console.log("mongodb connection failed, please try again")
        process.exit()
      })
    }catch(error){
        console.log("internal server error")

    }

}


