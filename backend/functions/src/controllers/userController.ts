import { Request, Response } from "express";
import { db, auth } from "../config/firebase";
import { User } from "../models/User";
import { Timestamp } from "firebase-admin/firestore";

export class UserController {
    async createUser(req: Request, res: Response) {
        try {
            const { email, displayName, experienceLevel } = req.body;
            const userRecord = await auth.createUser({ email, displayName });
            
            const user: User = {
                uid: userRecord.uid,
                email,
                displayName,
                experienceLevel,
                interviewsCompleted: 0,
                createdAt: Timestamp.now(),
                lastActive: Timestamp.now()
            };

            await db.collection("users").doc(userRecord.uid).set(user);
            return res.status(201).json({ userId: userRecord.uid });
        } catch (error) {
            return res.status(500).json({ error: "Failed to create user" });
        }
    }

    async getUser(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            const userDoc = await db.collection("users").doc(userId).get();
            
            if (!userDoc.exists) {
                return res.status(404).json({ error: "User not found" });
            }

            return res.json(userDoc.data());
        } catch (error) {
            return res.status(500).json({ error: "Failed to fetch user" });
        }
    }
}

export const userController = new UserController();