import { config as configDotenv } from "dotenv";

configDotenv();

export default {
  dburi: process.env.MONGODB_URI,
  port: process.env.PORT,
  host: process.env.NODEMAILER_HOST,
  service: process.env.NODEMAILER_SERVICE,
  mail_port: process.env.NODEMAILER_PORT,
  secure: process.env.NODEMAILER_SECURE,
  email: process.env.NODEMAILER_EMAIL,
  pass: process.env.NODEMAILER_PASS,
  tmdb_bearer: process.env.TMDB_TOKEN
};