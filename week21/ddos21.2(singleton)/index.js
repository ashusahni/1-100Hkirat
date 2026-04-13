import express from 'express'
import cluster from "cluster"
import { workerData } from 'worker_threads';

const totalCpu =2

const port = 3000;

if (cluster.isPrimary){
    console.log(`number of cpu ${totalCpu}`)
    console.log(`primary ${process.pid} is running `)
    
    // fork workers.

    for (let i = 0; i<totalCpu; i++){
        cluster.fork
    }

    cluster.on("exit",(worker, signla, code)=>{
        console.log(`worker ${worker.process.pid} died`)
        console.log(`let's fork another server`)
        cluster.fork()
    }) 

} else {
    const app = express()
    console.log(`worker ${process.pid} started`)

    app.get("/",(req,res)=>{
        res.send("the night we calling no one's there")
    })

    app.get("/api/:n",(req,res)=>{
        let n = parseInt(req.params.n)
        let count =0
    })
}


app.listen(port,()=>{console.log('statistic')})