import express from "express"
//import config from "config"
//import mongoose from "mongoose"

const app = express()
const PORT = 8000

//app.use('/api/auth',require('./routes/auth.routes'))
app.get('/', (req,res)=>{res.sendFile(path.resolve('filmoteeka_frontend', 'public', 'index.html'))})

app.listen(PORT,()=>{
    console.log('app has been starting on port '+PORT+'...')
})

async function start(){
    /*try{
       await mongoose.connect(config.get('mongoUri'),{
           useNewUrlParser: true,
           useUnifinedTopology: true,
           useCreateIndex: true
       })
       
    }
    catch(error){
        console.log('Server error', error.message)
        process.exit(1)
    }
    */
}

start();