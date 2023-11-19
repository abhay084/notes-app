// database/user.model.ts
import { Schema, Document, model, Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

const saltRounds = 10;

export interface UserModel extends Document {
    username: string;
    password: string;
}

const userSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
})

const User: Model<UserModel> = model<UserModel>('User', userSchema);

export default User;
