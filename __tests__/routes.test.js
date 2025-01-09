const request = require('supertest')
import { app } from "../app";


describe('endpoints testing', ()=>{
  test('should return 200 status code', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
  })
  test('should return hi', async()=>{
    const res = await request(app).get('/text')
    console.log(res)
    expect(res.text).toEqual('hi')
  })
  test('should return hi but in json', async()=>{
    const res = await request(app).get('/')
    console.log(res)
    expect(res.body).toEqual({message: "hi"})
  })
})