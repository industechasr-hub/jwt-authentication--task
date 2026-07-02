import express from "express";
import authRoutes from "./src/Routes/authRoutes.js";
import "dotenv/config";
import dbConfig from "./src/Config/dbConfig.js";


const PORT = process.env.PORT || 5001

const app = express();

app.use(express.json());    

dbConfig(); 

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));