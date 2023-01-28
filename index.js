import express from "express"

const app = express();
const port = 9000;

app.use("/api/nik", (req,res) => {
    res.json({message : "Hello from nik"})
})

app.use("/api/nn", (req,res) => {
    res.json({message : "Hello from nn"})
})

app.listen(9000, ()=> {
    console.log(`port is running on ${port}`)
})