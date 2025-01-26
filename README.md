# Commune

Commune is a feature-rich real-time communication platform inspired by Discord. It allows users to create and manage servers, chat via text, voice, and video, and interact in a fully mobile-responsive environment with dark and light mode options.

## Features

### Authentication
- **Google Login:** Secure and seamless authentication using Clerk.

### Server Management
- **Create Server:** Users can create a server with a name and image.
- **Invite Link:** Generate invite links for members to join the server.
- **Server Settings:** Admins can update the server name and image.
- **Manage Members:** Assign roles (Guest, Moderator) to members for better server management.

### Channels
- **Text Channels:** Real-time messaging using Socket.IO.
- **Audio Channels:** Group voice calls powered by LiveKit.
- **Video Channels:** Group video calls for enhanced interaction.
- **Custom Emojis:** Send personalized emojis in chats.

### File Sharing
- **Image and PDF Sharing:** Effortlessly send images and PDFs using UploadThing.

### Direct Messaging
- **One-on-One Messaging:** Private conversations with real-time text and video calls.

### Moderation Tools
- **Message Deletion:** Moderators and admins can delete inappropriate messages.
- **Member Management:** Moderators and admins can kick members from the server.

### Other Features
- **Mobile-Responsive:** Fully responsive design for a seamless experience across devices.
- **Dark/Light Mode:** Users can toggle between dark and light themes for better accessibility.

## Tech Stack

- **Frontend:** Next.js, TypeScript, Shadcn (UI components)
- **Authentication:** Clerk (Google Login)
- **Database Management:** Prisma (SQL Database)
- **Cloud Storage:** Avien (Cloud Database)
- **Real-Time Communication:** Socket.IO (Real-time messaging)
- **Voice & Video Calls:** LiveKit (Audio and video channels)
- **File Uploads:** UploadThing (Image and PDF sharing)

## Installation and Setup

### Prerequisites
- Node.js installed on your system.
- A Prisma-supported database (e.g., PostgreSQL, MySQL).

### Steps to Run the Project

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/commune.git
   cd commune
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Environment Variables:**
   Create a `.env` file in the root directory and add the required environment variables:
   ```env
   DATABASE_URL=your-database-url
   CLERK_SECRET_KEY=your-clerk-api-secret-key
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-api-publishable-key
   LIVEKIT_API_KEY=your-livekit-api-key
   LIVEKIT_API_SECRET=your-livekit-api-secret
   NEXT_PUBLIC_LIVEKIT_URL=your-livekit-url
   UPLOADTHING_TOKEN=your-uploadthing-token
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   ```

4. **Setup Database:**
   Run the Prisma migration to set up the database schema:
   ```bash
   npx prisma migrate dev
   ```

5. **Start the Development Server:**
   ```bash
   npm run dev
   ```

6. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000`.

## Usage
- **Create a Server:** Log in and create a server by providing a name and image.
- **Invite Members:** Generate and share invite links for others to join your server.
- **Text Messaging:** Interact with others in real-time through text channels.
- **Voice and Video Calls:** Use audio and video channels for group communication.
- **Custom Emojis:** Enhance your messages with personalized emojis.
- **File Sharing:** Share images and PDFs effortlessly within channels.
- **Manage Roles:** Admins can assign roles and manage member permissions.

## Future Enhancements
- Add custom emojis and reactions.
- Enable file sharing in text channels.
- Implement server statistics and analytics.
- Introduce themes for server customization.

---
- Contributions are welcome !!!


---

**Commune - Where Conversations Come Alive!**
