import express from 'express'
import usersRouter from "./routers/usersRouter.js"

const app = express()
const PORT = process.env.PORT||8080;
const server = app.listen(PORT,()=>console.log(`Listening on ${PORT}`));

app.use(express.json())
app.use('/user',usersRouter)