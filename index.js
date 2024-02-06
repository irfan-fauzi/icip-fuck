import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 9000

app.get('/', (req, res) => {
  res.send("hallo api is fucking work")
})

app.listen(PORT, () => {
  console.log(`server SEDANG BERJALAN DI port: ${PORT}`)
})