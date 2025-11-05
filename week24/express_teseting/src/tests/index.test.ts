import {describe, it , expect, vi} from 'vitest'
import axios from 'axios'
import {app} from "../index"
import request  from 'supertest'


vi.mock("../db.ts",()=>{
    return {
        PrismaClient: {
            create: vi.fn()
        }
    }
})


describe("test the sum function", ()=>{
    it("should return the sum of two postive num",async()=>{
        // const result = await axios.post ("https://localhost:3000/sum",{
        //     a:1,
        //     b:3
        // })
        // expect(result.data.answer).toBe(4)

        const res = await request(app).post("/sum").send({
            a:3,
            b:3
        })

        expect(res.body.answer).toBe(6)
        expect(res.statusCode).toBe(200)
    })
})

describe ("test the multiplication", ()=>{
    it("it should give multiplied value of postive numbers", async ()=>{
        const res = (await request (app).post("/multiplication").send({
            a:3,
            b:3
        }))

        expect(res.body.answer).toBe(9)


    })
})