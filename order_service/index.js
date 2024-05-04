import dotenv from 'dotenv'
import express from "express";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import orderRoutes from "./route/order.js"

import cors from "cors";
import helmet from "helmet";
import mongoose from 'mongoose';
import db from "./db/index.js";
dotenv.config()

const app = express();

const PORT = 5003;

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json())
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors( {
  credentials: true,
} ));

// app.get('/', (req, res) => { 
//   res.json("a7aaa"); 
// })

// app.listen(PORT, () => { 
//   console.log(`service is running on port ${PORT}`)
// }); 
app.use("/order",orderRoutes)


db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => {
    console.log(`Server Port: ${PORT}`);
})