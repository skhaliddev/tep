import express from 'express'

const router = express.Router()

router.get('/', (req, res, next)=>{
  next('route')
  console.log('it came back')
  // res.status(200).json({message: 'hi'})
})
router.get('/', (req, res, next)=>{
  next('router')
  // res.send('coming from second')
})

router.get('/text', (req, res)=>{
  res.status(200).send('hi')
})

export {
  router
}
