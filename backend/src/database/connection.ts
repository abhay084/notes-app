// database/connection.ts
import * as mongoose from 'mongoose'
import config from '../config';

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongo.url)
    } catch (error: any) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit the process if unable to connect
    }
};

export default connectDB
