// controllers/getAllNotes.ts
import { Request, Response } from 'express';
import fetchAllNotes from '../services/fetchAllNotes';
import { CustomRequest } from '../middleware/auth';

export const getAllNotes = async (req: Request, res: Response) => {
    const userId = (req as CustomRequest).token._id; // Get the user ID from the token

    try {
        const allNotes = await fetchAllNotes(userId);

        if (!allNotes) {
            res.status(500).send({ error: 'INTERNAL ERROR ☠️' });
            return;
        }

        res.status(200).json(allNotes);
    } catch (error: any) {
        console.error('Error in get all notes controller:', error.message);
        res.status(500).send({ error: 'INTERNAL ERROR ☠️' });
    }
};
