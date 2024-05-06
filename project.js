const mongoose = require ("mongoose")
const dotenv = require ("dotenv").config();
const app = require ("./app");
const port = process.env.PORT || 8080;

const start = async ()=> {
try{
    await mongoose.connect(process.env.DB_URL,{
        useUnifieldTopology:true,
        useNewUrlParser:true, 
        
    })
    console.log("Database Connected Successfully!!!");
    app.listen(port,()=>{
        console.log(`Server running on port ${port}`);
    })
    
}catch(err){
    console.error(err);
    console.error("Error connecting to MongoDB");
}


};
start();