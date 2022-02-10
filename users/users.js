import express from "express";

const userRouter = express.Router();


userRouter.post("/login", (request, response) => {
    response.send("login");
})

userRouter.post("/register", (request, response) => {
    response.send("register");
})


export {userRouter};
