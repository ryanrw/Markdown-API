import { PGURI, PGUSER, PGPASSWORD, PGDATABASE } from './secret'
import { Pool } from 'pg'

export const pool = new Pool({
  host: PGURI,
  user: PGUSER,
  password: PGPASSWORD,
  database: PGDATABASE,
})
