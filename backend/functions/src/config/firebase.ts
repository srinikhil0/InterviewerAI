import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

// Initialize Firebase Admin
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.applicationDefault(),
    });
}

// Initialize Firestore
const db = admin.firestore();
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
