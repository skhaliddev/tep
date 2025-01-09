import express from 'express';
import { router } from './random.js';

const app = express();

app.get('/er', async(req, res, next)=>{
  try{
    throw new Error('Got an error')
  }catch(err){
    next(err)
  }
})

app.get('/', (req, res, next)=>{
  console.log('got 1')
  next('route')
})

app.use(router)

app.get('/', (req, res, next)=>{
  res.send('coming from the main')
})

app.use((err, req, res, next)=>{
  console.log('in the error handling middleware')
  res.status(422).json(err.message)
})

export {
  app
}
