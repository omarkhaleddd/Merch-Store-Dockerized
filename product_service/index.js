import dotenv from 'dotenv'
import express from "express";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import productRoutes from "./route/product.js"
import cors from "cors";
import helmet from "helmet";
import mongoose from 'mongoose';
import db from "./db/index.js";
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
dotenv.config()

const app = express();

const PORT = process.env.PORT || 10000;

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

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use('/upload', express.static(join(__dirname, 'upload')));

// Define API endpoint for serving uploaded photos
app.get('/api/upload/:photoName', (req, res) => {
    const photoName = req.params.photoName;
    res.sendFile(join(__dirname, 'upload', photoName));
});
// app.get('/', (req, res) => { 
//   res.json("a7aaa"); 
// })

// app.listen(PORT, () => { 
//   console.log(`service is running on port ${PORT}`)
// }); 
app.use("/product",productRoutes)
console.log("hi");

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => {
    console.log(`Server Port: ${PORT}`);
})