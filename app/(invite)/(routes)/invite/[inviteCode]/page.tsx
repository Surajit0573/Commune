import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

interface InvitationCodePageProps {
  params: Promise<{
    inviteCode: string;
  }>;
}

const InvitationCodePage = async ({ params }: InvitationCodePageProps) => {
  try {
    const resolvedParams = await params; // Resolve the params promise
    const { inviteCode } = resolvedParams;

    // Fetch the current user profile
    const profile = await currentProfile();

    // Redirect to home if the profile is not found
    if (!profile) {
      return redirect("/");
    }

    // Redirect to home if the inviteCode is missing
    if (!inviteCode) {
      return redirect("/");
    }

    // Check if the user is already a member of the server
    const existingServer = await db.server.findFirst({
      where: {
        inviteCode,
        members: {
          some: {
            profileId: profile.id,
          },
        },
      },
    });

    if (existingServer) {
      // Redirect to the existing server if the user is already a member
      return redirect(`/servers/${existingServer.id}`);
    }

    // Add the user to the server by updating the members list
    const server = await db.server.update({
      where: {
        inviteCode,
      },
      data: {
        members: {
          create: [
            {
              profileId: profile.id,
            },
          ],
        },
      },
    });

    if (server) {
      // Redirect to the newly joined server
      return redirect(`/servers/${server.id}`);
    }
  } catch (error) {
    console.error("Error handling invitation code:", error);
    // Redirect to home in case of an unexpected error
    return redirect("/");
  }

  // Return null if no redirection occurs (shouldn't happen in normal flow)
  return null;
};

export default InvitationCodePage;
