import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());
const port = 7000;

app.get("/test", async (req: Request, res: Response) => {
    res.json({ message: "Hello!" });
});

app.listen(port, () => {
    console.log(`server started on localhost:${port}`)
})
