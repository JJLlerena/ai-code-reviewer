import dotenv from 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes/review';
dotenv

const app = express()
const PORT = Number(process.env.PORT || 3000)


app.use(cors())
app.use(express.json())
app.use('/api', router)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})