const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const employeeRoutes = require("./routes/employeeRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("HRMS Lite API running");
});

app.use("/employees", employeeRoutes);
app.use("/attendance", attendanceRoutes);

const startServer = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB Connected');
        app.listen(5000, ()=> {console.log('Server running on http://localhost:5000')})
    }
    catch(e){
        console.error(`Error while starting server in startServer ;- ${e}`);
        process.exit(1);
    }
}

startServer();