import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return await new Promise(resolve => resolve('hash'))
  }
}))

const salt = 12

const makesut = (): BcryptAdapter => {
  return new BcryptAdapter(salt)
}

describe('Brypt Adapter', () => {
  test('Shold call bcrypt with correct values', async () => {
    const sut = makesut()
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })

  test('Shold return a hash on success', async () => {
    const sut = makesut()
    const hash = await sut.encrypt('any_value')
    expect(hash).toBe('hash')
  })
})
