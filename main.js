
const express = require('express');
const {userService} = require("./services/user-service");

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.get("/users/:name",(req,res)=>{
//     console.log(req.params.name)
//     console.log(req.query)
//     res.end("Hello from get")
// })
// app.post("/users",(req,res)=>{
//     console.log(req.body)
//     res.end("Hello from post")
// })
app.get("/users",async (req,res)=>{
    const newUser=await userService.getAll()
    res.json(newUser)
})
app.get("/users/:id",async (req,res)=>{
const id=req.params.id
    const newUser=await userService.getById(id)
    res.json(newUser)
})
app.post("/users",async (req,res)=>{
    const user=req.body
    const newUser=await userService.create(user)
    res.json(newUser)
})
app.put("/users/:id",async (req,res)=>{
    const user=req.body
    const {id} = req.params;
    const newUser=await userService.updateById(id,user)
    res.json(newUser)
})
app.delete("/users/:id", async (req,res)=>{
    const {id} = req.params;
    await userService.deleteById(id)
    res.end()
} )
app.listen(5000,()=>{
    console.log("server running on 5000")
})