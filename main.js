import express from "express";


const port = 8000;
const app = express();

app.all("/hello", (request, response, next) => {
    console.log("All");
    next();
})

const cb = (request, response, next) => {
    console.log("CB");
    next();
}

app.route("/user")
    .get("/hello", cb, (request, response) => {
        response.send("Hello Express");
    })
    .post("/hello", (request, response) => {
        response.send("Hello Express POST");
    })

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
})
