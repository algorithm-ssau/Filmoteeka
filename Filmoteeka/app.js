const express = requide('express')

const app = express()

app.get('/', (req,res)=>{
res.send(<h1>Hello express</h1>)
})

app.listen(8000,()=>{
    console.log('app is running')
})