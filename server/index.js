import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import route from "./routes/userRoute.js"
import cors from "cors";

const app = express();
// middleware
app.use(bodyParser.json());
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

// connecting mongoose to mongodb
mongoose.connect(MONGOURL).then(() => {
    console.log("connected to mongoDB successfully");
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`)
    });
})
    .catch((error) => console.log(error))

app.use("/api", route)
