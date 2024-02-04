module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_USER,
      port: 5432,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory:  "./migrations/"
    },
  },
  additionalDatabase: {
    client: "pg",
      connection: {
        host: process.env.DATABASE_HOST2,
        user: process.env.DATABASE_USER2,
        password: process.env.DATABASE_PASSWORD2,
        database: process.env.DATABASE_USER2,
        port: 5432,
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        directory:  "./migrations2"
      },
  }
}