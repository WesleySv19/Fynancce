import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const PORT = process.env.PORT || 3333;


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log(`Server running on the port: ${PORT} in ${process.env.PORT}`);
})
