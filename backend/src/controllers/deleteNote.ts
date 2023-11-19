// controllers/deleteNote.ts
import { Request, Response } from 'express';
import handleDeleteNote from '../services/handleDeleteNote';
import { CustomRequest } from '../middleware/auth';

export const deleteNote = async (req: Request, res: Response) => {
    const { noteId } = req.params;
    const userId = (req as CustomRequest).token._id; // Get the user ID from the token

    try {
        const deletedNote = await handleDeleteNote(noteId, userId);

        if (!deletedNote) {
            res.status(404).json({ error: 'Note not found or unauthorized' });
            return;
        }

        res.status(200).json({ message: 'Note deleted successfully', deletedNote });
    } catch (error: any) {
        console.error('Error in delete note controller:', error.message);
        res.status(500).send({ error: 'INTERNAL ERROR ☠️' });
    }
};
