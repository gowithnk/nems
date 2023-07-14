module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: '',
  DB: 'nodeapi',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    aquare: 30000,
    idle: 10000
  }
}
