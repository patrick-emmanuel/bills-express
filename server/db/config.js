module.exports = {
  development: {
    databaseUrl: process.env.DATABASE_URL,
    dialect: 'postgres',
    freezeTableName: true
  },
  test: {
    databaseUrl: process.env.DATABASE_URL,
    dialect: 'postgres'
  },
  production: {
    databaseUrl: process.env.DATABASE_URL,
    dialect: 'postgres'
  },
}