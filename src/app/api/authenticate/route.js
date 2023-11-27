import dbconnection from "@/utils/dbconnection";
import models from "@/models/model";
import { NextResponse } from "next/server";

export async function POST(req,res) {
try{
    const body= await req.json();
    await dbconnection();
    
    const contact = await models.create(body);
    return NextResponse.json({
        message:"contact created successfully",
    },{
        status:200

    })
    }catch(err){
        console.log(err);
        return NextResponse.json({
            message:"something went wrong",
        },{
            status:500
        });
    }
}