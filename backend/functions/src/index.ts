/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", routes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response) => {
    console.error(err.stack);
    res.status(500).json({
        error: "Something went wrong!",
        message: process.env.NODE_ENV === "development" ? err.message : undefined
    });
});

// Export the Express app as a Firebase Cloud Function
export const api = onRequest(app);
