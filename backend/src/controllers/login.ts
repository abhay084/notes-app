// controllers/login.ts
import { Request, Response } from 'express';
import handleLogin from '../services/handleLogin';

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const data = await handleLogin(username, password);

        if (!data) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }

        res.status(200).json(data);
    } catch (error: any) {
        console.error('Error in login controller:', error.message);
        res.status(500).send({ error: 'INTERNAL ERROR ☠️' });
    }
};
