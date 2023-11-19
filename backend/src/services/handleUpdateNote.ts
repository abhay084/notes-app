// services/handleUpdateNote.ts
import Note from '../database/note.model';

const handleUpdateNote = async (
    noteId: string,
    updatedData: { title?: string; content?: string },
    userId: string
) => {
    try {
        // Find the note by ID and user ID to ensure it belongs to the authenticated user
        const note = await Note.findOne({ _id: noteId, user: userId });

        if (!note) {
            return null; // Note not found or not authorized
        }

        // Update the note with the provided data
        const updatedDate = Date.now();
        Object.assign(note, updatedData, { updatedAt: updatedDate });

        return await note.save();
    } catch (error: any) {
        console.error('Error updating note:', error.message);
        return null;
    }
};

export default handleUpdateNote;
