// index.ts
import * as express from "express";
import { Application, json } from "express";
import * as cors from "cors";
import { router } from "./routes";
import helmet from "helmet";
import connectDB from "./database/connection";
import * as dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const port = 8000;

connectDB().then(
    () => {
        console.log("Connected to MongoDB");
    },
    (error) => {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
)

// Then pass these options to cors:
app.use(cors());

app.use(json());
app.use(helmet());
app.use("/", router);

app.listen(port, () => console.log(`server started on port: ${port}`));
