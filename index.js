import express from "express"

const app = express();
const port = 9000;

app.use("/", (req,res) => {
    res.json({message : "Hello from express app"})
})

app.use("/api/nik", (req,res) => {
    res.json({message : "Hello from nik"})
})

app.listen(9000, ()=> {
    console.log(`port is running on ${port}`)
})