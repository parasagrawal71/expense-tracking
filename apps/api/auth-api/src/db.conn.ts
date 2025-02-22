export const DBConn = {
  host: process.env.DB_HOST || 'localhost',

  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,

  username: process.env.DB_USER || 'postgres',

  password: process.env.DB_PASSWORD || '',

  database: process.env.DB_NAME || 'auth_api',
};
