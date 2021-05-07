export class ServerError extends Error {
  constructor () {
    super('Intermal server error')
    this.name = 'ServerError'
  }
}
