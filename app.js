const express = require('express');
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://root:root@cluster0.yozhs.mongodb.net/product?retryWrites=true&w=majority');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3000
const app = express();
const AdminRouter = require('./routes/admin.routes');
const CategoryRouter =require('./routes/category.routes');

app.use(express.static(path.join(__dirname,'public')));


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(cors());

app.use("/api/admin",AdminRouter);
app.use("/api/category",CategoryRouter)

app.listen(port,()=>{
    console.log("Server Is Running..."+port);
});
