module.exports = {
  development: {
    username: "debug",
    password: "debug",
    database: "spikes_express",
    host: '127.0.0.1',
    dialect: 'postgres',
    freezeTableName: true
  },
  test: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    host: '127.0.0.1',
    dialect: 'postgres'
  },
}