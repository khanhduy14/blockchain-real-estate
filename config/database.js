module.exports = {
  database: "new_schema",
  user: "root",
  password: "123456789",
  options: {
    host: "localhost",
    dialect: 'mysql',
    port: 3306,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    logging: false
  }
}