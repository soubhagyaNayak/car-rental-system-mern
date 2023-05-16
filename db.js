const mongoose =require("mongoose");

function connectDB(){
    mongoose.connect('mongodb+srv://soubhagya:soubhagya7@cluster0.agap5ex.mongodb.net/cars-soubhagya',{useUnifiedTopology: true, useNewUrlParser: true})

    const connection =mongoose.connection

    connection.on('connected' ,()=>{
        console.log('mongodb connection successful')
    })

    connection.on('error' ,() =>{
        console.log('mongodb connection error')
    })
};

connectDB()

module.exports =mongoose