import express from 'express'; 

import cors from 'cors';
import { PORT } from './config/server.config.js';

import pingRouter from './router/index.js'

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/api',pingRouter);



app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
})