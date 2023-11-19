// middleware/auth.ts
import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export interface CustomRequest extends Request {
    token: jwt.JwtPayload;
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            throw new Error('Authentication failed');
        }

        (req as CustomRequest).token = jwt.verify(token, process.env.JWT_SECRET!) as jwt.JwtPayload;

        next();
    } catch (err: any) {
        console.error('Authentication error:', err.message);
        res.status(401).json({ error: 'Authentication failed' });
    }
};
