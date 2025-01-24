import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import {v4 as uuidv4} from "uuid";
export async function PATCH(
    req:Request,
    {params}:{params:Promise<{serverId:string}>}
){
    try{
        const {serverId}=await params;
        const profile=await currentProfile();
        if(!profile){
            return new NextResponse("UnAuthorized",{status:401});
        }

        if(!serverId){
            return new NextResponse("Server ID Missing",{status:400});
        }

        const server =await db.server.update({
            where:{
                id:serverId,
                profileId:profile.id, //Only admin can invite users
            },
            data:{
                inviteCode:uuidv4() 

            }
        });

        return NextResponse.json(server);

    }catch(error){
        console.log("[SERVER_ID] ",error);
        return new NextResponse("Internal Error",{status:500});
    }
}