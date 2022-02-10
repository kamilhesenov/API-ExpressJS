import express from "express";
import {userRouter} from "./users/users.js";

const port = 8000;
const app = express();


app.get("/hello", (request, response) => {
        response.end();
    })

app.use("/users",userRouter);

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
})
