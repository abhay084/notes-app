// controllers/register.ts
import { Request, Response } from 'express';
import handleRegister from '../services/handleRegister';

export const register = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const data = await handleRegister(username, password);

        if (!data) {
            res.status(500).send({ error: 'INTERNAL ERROR ☠️' });
            return;
        }

        res.status(201).json(data);
    } catch (error: any) {
        console.error('Error in register controller:', error.message);
        res.status(500).send({ error: 'INTERNAL ERROR ☠️' });
    }
};
