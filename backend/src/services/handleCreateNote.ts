// services/handleCreateNote.ts
import Note from '../database/note.model';
import { CustomRequest } from '../middleware/auth';

const handleCreateNote = async (title: string, content: string, userId: string) => {
    const createdAt = Date.now();

    try {
        const newNote = new Note({
            title,
            content,
            createdAt,
            user: userId, // Associate the note with the authenticated user
        });

        return await newNote.save();
    } catch (error: any) {
        console.error('Error creating note:', error.message);
        return null;
    }
};

export default handleCreateNote;
