// services/handleLogin.ts
import User, { UserModel } from "../database/user.model";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";


const handleLogin = async (username: string, password: string) => {
    try {
        const userFound = await User.findOne({ username });

        if (!userFound) {
            return null; // User not found
        }

        // Compare the plain text password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, userFound.password);

        if (isPasswordValid) {
            const token = jwt.sign(
                {
                    _id: userFound._id,
                    username: userFound.username,
                },
                process.env.JWT_SECRET!,
                {
                    expiresIn: '120h',
                }
            );

            return { _id: userFound._id, username, token };
        } else {
            return null; // Incorrect password
        }
    } catch (error: any) {
        console.error('Error in handleLogin:', error.message);
        return null;
    }
};

export default handleLogin;
