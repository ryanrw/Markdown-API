import dotenv from 'dotenv'
import { existsSync } from 'fs'

if (existsSync('.env')) {
  console.log('using .env as environment variable')
  dotenv.config({ path: '.env' })
} else {
  console.log('using .env.example as environment variable')
  dotenv.config({ path: '.env.example' })
}

export const ENVIRONMENT = process.env.NODE_ENV
const prod = ENVIRONMENT === 'production'

export const PGURI = prod ? process.env['PG_HOST'] : process.env['PG_LOCALHOST']
export const PGUSER = process.env['PGUSER']
export const PGDATABASE = process.env['PGDATABASE']
export const PGPASSWORD = process.env['PGPASSWORD']
