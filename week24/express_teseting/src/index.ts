import  express  from "express";
import {z} from 'zod'

export const app = express()
app.use(express.json())

const sumInput = z.object({
    a: z.number(),
    b: z.number()
})


app.post("/sum",(req,res)=>{

    const parsedResponse = sumInput.safeParse(req.body)

    if(!parsedResponse.success){
        return res.status(411).json({
            msg:"incorrect Input"
        })
    }
 
    const answer = parsedResponse.data.a + parsedResponse.data.b

    res.json({
        answer
    })

})