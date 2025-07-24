const express=require('express');
const app=express();
const apiRoutes=require('./routes');
app.use('/api',apiRoutes);

const { ServerConfig ,Logger} = require('./config');


app.listen(ServerConfig.PORT,()=>{
    console.log(`Server is running on port :${ServerConfig.PORT}`);
    
})