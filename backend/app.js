const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 3000
const userRoutes = require('./routes/user-routes')
var cors = require("cors")

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use(userRoutes);

// app.post('/users', async (req, res) => {
//     await addUser(req.body);
//     res.send('Added to db')
//   })

//   app.get('/users', async (req, res) => {
//     const userDetails = await getUser();
//     res.send(userDetails)
//   })

async function connectDB() {
    await mongoose.connect("mongodb+srv://reekrajroy:NxW9+sj3cdQkqg#@cluster0.6shzwgo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
        dbName: "UsersDB"
    })
}

connectDB().catch((err) => console.error(err)); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
