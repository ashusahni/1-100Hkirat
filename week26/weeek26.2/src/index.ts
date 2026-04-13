
import express from "express"

const app = express ()
//@ts-ignore

app.get("/user",(req,res)=>{


    let user ={
        name:"nescafe",
        age:22
    }

    res.json({
        name: "Ashtuosh"
    })
}) 
app.post("/user",(req,res)=>{
    res.json({
        name: "Ashtuosh"
    })
})

app.listen(3000)