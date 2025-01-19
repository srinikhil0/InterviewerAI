import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

// Initialize Firebase Admin
if (!admin.apps.length) {
    admin.initializeApp({
        projectId: "interviewerai-62292",
        credential: admin.credential.applicationDefault(),
        databaseURL: "https://interviewerai-62292.firebaseio.com"
    });
}

// Initialize Firestore
const db = admin.firestore();

// Connect to emulator in development
if (process.env.NODE_ENV === "development") {
    db.settings({
        host: "localhost:8080",
        ssl: false
    });
}

const auth = admin.auth();
const storage = admin.storage();

// Export the initialized services
export {
    admin,
    functions,
    db,
    auth,
    storage
};
