// routes.ts
import { Router, Request, Response } from "express";
import { createNote } from './controllers/createNote';
import { getAllNotes } from './controllers/getAllNotes';
import { deleteNote } from './controllers/deleteNote';
import { updateNote } from './controllers/updateNote';
import { login } from "./controllers/login";
import { register } from "./controllers/register";
import { auth } from "./middleware/auth";

export const router: Router = Router();

// Unprotected routes
router.post('/create-note', auth, createNote);
router.get('/get-all-notes', auth, getAllNotes);
router.delete('/delete-note/:noteId', auth, deleteNote);
router.put('/update-note/:noteId', auth, updateNote);
router.post('/login', login);
router.post('/register', register);

router.get("/ping", (req: Request, res: Response) => {
    res.status(200).send("Pong!");
});
