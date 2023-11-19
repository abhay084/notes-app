// services/fetchAllNotes.ts
import Note from '../database/note.model';

const fetchAllNotes = async (userId: string) => {
    try {
        return await Note.find({ user: userId });
    } catch (error: any) {
        console.error('Error retrieving all notes:', error.message);
        return null;
    }
};

export default fetchAllNotes;
