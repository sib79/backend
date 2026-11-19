import express from "express"


const app = express()

app.use(express.json())
const PORT = 3000 

app.get("/" , (req , res)=>{
    res.send("hello world version 3457")
})


app.listen(PORT , ()=>{
    console.log("connected to port ", PORT)
})