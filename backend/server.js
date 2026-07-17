const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const cors=require("cors");
const app=express();

const PORT=process.env.PORT || 5000;

dotenv.config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI,
    {})
.then(()=>console.log("MongoDB connected"))
.then((error)=>console.log(error));


app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});