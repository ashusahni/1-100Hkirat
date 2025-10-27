import {describe, it , expect} from '@jest/globals'
import request   from 'supertest'
import { app } from '../index'



describe("POST /sum",()=>{
    it("should return to the sum two number", async()=>{
        const res = await request(app).post("/sum").send({
            a:0,
            b:0
        })

        expect(res.statusCode).toBe(200)
        expect(res.body.answer).toBe(0)

    })

    it("should do the same as returning two num ", async ()=>{
        const res = await request(app).post("/sum").send({
            a:["audemerPiguet"]
        })

        expect(res.statusCode).toBe(411);
        expect(res.body.msg).toBe("Incorrect Input")

    })

}) 