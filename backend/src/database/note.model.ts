// database/note.model.ts
import { Schema, Document, model, Model, Types } from 'mongoose';

export interface NoteModel extends Document {
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    user: Types.ObjectId; // Reference to the User model
}

const noteSchema: Schema = new Schema({
    title: { type: String, required: true },
    content: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    user: { type: Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
});

const Note: Model<NoteModel> = model<NoteModel>('Note', noteSchema);

export default Note;
