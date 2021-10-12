import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Igor',
        email: 'igor.romulo.santos@gmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect({
        ok: 'ok'
      })
  })
})
