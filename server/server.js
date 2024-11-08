const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const instanceController = require("./controllers/instanceController");
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO);
mongoose.connection.on('connected',()=>{
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error',(error)=>{
    console.log(`Error connecting to MongoDB: ${error}`);
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173',
    methods:["GET","POST","DELETE","PUT"],
}));

app.get("/api/instances",instanceController.getInstances);

app.post("/api/instances",instanceController.addInstance);

app.get("/api/instances/:id",instanceController.getInstancesById);

app.put("/api/instances/:id",instanceController.updateInstance);

app.delete("/api/instances/:id",instanceController.deleteInstance);



app.listen(process.env.PORT || 8000,()=>{
    console.log('Server running on port 8000');
})