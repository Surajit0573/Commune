import { currentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export default async ({params}: {params:Promise<{serverId: string}>}) => {
    const {serverId}=await params;

    const profile = await currentProfile();
    if (!profile) {
        return redirect("/");
    }
    const server = await db.server.findUnique({
        where: {
            id: serverId,
            members: {
                some: {
                    profileId: profile.id
                }
            }
        },
        include: {
            channels: {
                where: {
                    name: "general"
                },
                orderBy: {
                    createdAt: "asc"
                }
            }
        }
    })
    const initialChannel = server?.channels[0];
    if (initialChannel?.name !== "general") {
        return null;
    }
    return redirect(`/servers/${serverId}/channels/${initialChannel?.id}`)
}