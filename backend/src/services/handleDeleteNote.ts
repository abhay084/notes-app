// services/handleDeleteNote.ts
import Note from '../database/note.model';

const handleDeleteNote = async (noteId: string, userId: string) => {
    try {
        // Find the note by ID and user ID to ensure it belongs to the authenticated user
        return await Note.findOneAndDelete({ _id: noteId, user: userId });
    } catch (error: any) {
        console.error('Error deleting note:', error.message);
        return null;
    }
};

export default handleDeleteNote;
