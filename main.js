import express from "express";


const port = 8000;
const app = express();


app.get("/hello", (request, response) => {
        response.cookie("token","sadasdas",{
            domain: "",
            path: "/",
            secure: true,
            expires: 600000
        });
        response.clearCookie("token", { path: "/" });
        response.send("Hello");
    })


app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
})
