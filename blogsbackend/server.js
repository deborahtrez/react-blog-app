const express = require ('express')
const app = express()

const cors = require ('cors')
const dotenv = require ('dotenv')
const mongoose = require ('mongoose')
const blogsUrls = require('./api/blogs')

dotenv.config()

mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology:true }, 
() => console.log('Database Connected'))

app.use(express.json())
app.use(cors())
app.use('/blogs', blogsUrls)

app.listen(6000, () =>{
    console.log('Server is running')
})