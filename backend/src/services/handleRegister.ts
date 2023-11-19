// services/handleRegister.ts
import User from "../database/user.model";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

const handleRegister = async (username: string, password: string) => {
    try {
        // Create a new user instance
        const newUser = new User({ username, password });

        // Save the user to the database
        await newUser.save();

        // Generate a token for the new user
        const token = jwt.sign(
            {
                _id: newUser._id,
                username: newUser.username,
            },
            process.env.JWT_SECRET!,
            {
                expiresIn: '24h',
            }
        );

        // Return the user data and token
        return { _id: newUser._id, username, token };
    } catch (error: any) {
        console.error('Error in handleRegister:', error.message);
        return null;
    }
};

export default handleRegister;
