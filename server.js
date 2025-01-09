import { app } from "./app.js";

const obj = {}

const cb0 = (req, res, next) => {
  console.log('in cb0')
  obj.a = '1'
  next('route')
  console.log('in cb0 after next')
  obj.a = '2'
  res.send(obj)
}

const cb1 = (req, res, next) => {
  obj.a = '3'
  console.log('in cb1')
  // res.send(obj)
  next()
  obj.a = '4'
}

app.get('/', [cb0, cb1])
app.get('/', (req, res)=>{
  // res.send('next same route')
})


app.get('/ab?cd', (req, res)=>{
  res.send('/ab?cd')
})

app.get('/ab/:id/:poi/asd',(req, res)=>{
  res.send(`You sent id ${req.params.id}, poi ${req.params.poi}`)
} )

app.listen(8080, ()=>{
  console.log('listening on 8080')
});
