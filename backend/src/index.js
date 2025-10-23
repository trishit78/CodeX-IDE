import express from 'express'; 

import cors from 'cors';
import { PORT } from './config/server.config.js';

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/ping',(req,res)=>{
    res.send("hello world");
})

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
})