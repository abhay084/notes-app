// controllers/updateNote.ts
import { Request, Response } from 'express';
import handleUpdateNote from '../services/handleUpdateNote';
import { CustomRequest } from '../middleware/auth';

export const updateNote = async (req: Request, res: Response) => {
    const { noteId } = req.params;
    const { title, content } = req.body;
    const userId = (req as CustomRequest).token._id; // Get the user ID from the token

    try {
        const updatedNote = await handleUpdateNote(noteId, { title, content }, userId);

        if (!updatedNote) {
            res.status(404).json({ error: 'Note not found or unauthorized' });
            return;
        }

        res.status(200).json({ message: 'Note updated successfully', updatedNote });
    } catch (error: any) {
        console.error('Error in update note controller:', error.message);
        res.status(500).send({ error: 'INTERNAL ERROR ☠️' });
    }
};
