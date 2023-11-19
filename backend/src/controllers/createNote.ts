// controllers/createNote.ts
import { Request, Response } from 'express';
import handleCreateNote from '../services/handleCreateNote';
import {CustomRequest} from "../middleware/auth";

export const createNote = async (req: Request, res: Response) => {
    const { title, content } = req.body;
    const userId = (req as CustomRequest).token._id; // Get the user ID from the token

    try {
        const data = await handleCreateNote(title, content, userId);

        if (!data) {
            res.status(500).send({ error: 'INTERNAL ERROR ☠️' });
            return;
        }

        res.status(201).json(data);
    } catch (error: any) {
        console.error('Error in create note controller:', error.message);
        res.status(500).send({ error: 'INTERNAL ERROR ☠️' });
    }
};
