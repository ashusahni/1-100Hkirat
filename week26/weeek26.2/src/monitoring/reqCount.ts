
import client from 'prom-client'

const reqCount = new client.Counter({
        name: "request_count",
        help:"total req",
        labelNames: ["method", "route","status_code"]
    }
) 

export function reqCount(req,res,next)