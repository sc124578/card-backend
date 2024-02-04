module.exports = {
  development: {
    client: "pg",
    connection: {
      host: heffalump.db.elephantsql.com,
      user: slhgiuzg,
      password: ULb_uKAj-Rf0Kei7jQRL8yHKs__EBh3d,
      database: slhgiuzg,
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
        host: heffalump.db.elephantsql.com,
        user: izoagnxs,
        password: aOKsevjpaXl4aEvmTlNJ1DY06hlFftMB,
        database: izoagnxs,
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
