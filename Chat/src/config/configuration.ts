require('dotenv').config()

export default () => ({
    //port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        USER: process.env.DATABASE_USER,
        PASSWORD: process.env.DATABASE_PASSWORD,
    }
  });