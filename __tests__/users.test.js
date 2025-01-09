import request from 'supertest'
import { app } from '../app'
import axios from 'axios';
import Users from '../User';
import defaultExport, { foo, bar } from '../Axios';

// describe('POST /user', ()=>{
//   describe('given a username and password', ()=>{
//     test('should respond with 201', async ()=>{
//       const response = await request(app).post('/users').send({
//         username: "ali",
//         password: "123123123"
//       })

//       expect(response.statusCode).toBe(201)
//     })
//   })
//   describe('when the username and password is missing', ()=>{
//   })
// })


// test('two plus two', ()=>{
//   expect(2+2).toBe(4)
// })

// test('object equal check', ()=>{
//   expect({data: "1", nest:{ data: undefined}}).toEqual({data: "1", nest:{}})
// })

// test('object strict equal check', ()=>{
//   expect({data: "1", nest:{ data: undefined}}).toStrictEqual({data: "1", nest:{ data: undefined}})
// })

// //truthiness

// test('objects truthiness', ()=>{
//   expect(null).toBeNull()
//   expect(null).not.toBeTruthy()
//   expect(1).toBeTruthy()
//   expect(0).toBeFalsy()
//   expect('asd').toBe('asd')
//   expect('asd').toEqual('asd')
// })

// test('arrays', ()=>{
//   expect(['ali', 'hamza', 'ahmed']).toContain('ali')
//   expect(['ali', 'hamza', 'ahmed']).not.toContain('zain')
// })
// async function fetchSomething(){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve('done')
//     }, 500)
//   })
// }

// test('promises', ()=>{
//   fetchSomething().then((res)=>{
//     expect(res).toBe('done')
//     expect(res).not.toBe('done2')
//   })
// })

// function throwIT() {
//   throw new Error('You got an error :(')
// }

// test('exceptions', ()=>{
//   expect(throwIT).toThrow(Error)
// })

// let names = []

// async function waitSometime(){
//   return new Promise((resolve)=>{
//     setTimeout(() => {
//       names.push('ali')
//       resolve('done')
//     }, 1000)
//   })
// }

// async function asy(){
//   names.push('hamza')
//   return 123
// }

// beforeEach(() => {
//   return waitSometime()
// })

// beforeEach(()=>{
//   asy()
// })

// test('testing hook', ()=>{
//   expect(names).toContain('ali')
//   expect(names).toContain('hamza')
// })

// function forEach(arr, callback){
//   for(let item of arr){
//     callback(item)
//   }
// }

// test('testing mock', ()=>{
//   const mck = jest.fn(x => x * 10)

//   forEach([1,2], mck);

//   expect(mck.mock.calls).toHaveLength(2)
//   expect(mck.mock.results[0].value).toEqual(10)
// })

// jest.mock('axios')

// test('.mock on every Mock', ()=>{
//   const myMock2 = jest.fn(x=>x);
//   myMock2.mockReturnValueOnce(2).mockReturnValueOnce(5).mockReturnValueOnce(11)
//   console.log(myMock2())
//   console.log(myMock2())
//   console.log(myMock2())
//   axios.get.mockResolvedValue({name: "zain"})
//   expect(myMock2.mock.calls).toHaveLength(3)
//   console.log('users: ', Users.all())
//   // expect(myMock2.mock.calls[1][0]).toBe(2)
// })

jest.mock('../Axios', () => {
  const original = jest.requireActual('../Axios')

  return {
    _esModule: true,
    ...original,
    foo: {foo: false},
    default: ()=>({ d: false})
  }
})

test('mock partial', ()=>{
  console.log('foo ',foo)
  console.log('bar ',bar)
  console.log('defaultExport ', defaultExport)
})
