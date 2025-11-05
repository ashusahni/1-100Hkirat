

import express from "express"
import { PrismaClient } from "./db";



export const app = express() 
app.use(express.json())


app.post("/sum",async( req, res) =>{
    const { a , b} = req.body;
    
        if(a > 1000000 || b > 1000000) {
        return res.status(422).json({
            msg:"we do not support numbers that higher"
        })
    }
    const result= a + b

    await PrismaClient.request.create({
        data: {
            a: a,
            b: b,
            answer : result,
            type :  'Sum'
        }
    })
    res.json({answer: result})


})


app.post("/multiplication",async( req, res) =>{
    const { a , b} = req.body;
    const result= a * b
    res.json({answer : result})
    res.json({answer: result})

        await PrismaClient.request.create({
        data: {
            a: a,
            b: b,
            answer : result,
            type :  'Multiply'
        }
    })
})

    

