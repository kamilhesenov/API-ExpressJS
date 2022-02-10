import express from "express";
import {userRouter} from "./users/users.js";

const port = 8000;
const app = express();

app.use((request,response,next)=>{
    console.log("Время: ", Date.now());
    next();
})

app.get("/hello", (request, response) => {
        throw new Error("Error!!!");
})

app.use("/users",userRouter);

app.use((error,request,response,next)=>{
    console.log(error.message);
    response.status(401);
    response.send(error.message);
})

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
})
