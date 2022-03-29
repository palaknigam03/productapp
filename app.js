const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://root:root@cluster0.yozhs.mongodb.net/product?retryWrites=true&w=majority');
const path = require('path');
const app = express();
const AdminRouter = require('./routes/admin.routes');

app.use(express.static(path.join(__dirname,'public')));


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use("/api/admin",AdminRouter);

app.listen(3000,()=>{
    console.log("Server Is Running...");
});