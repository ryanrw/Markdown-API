import { Request, Response } from 'express'
import { pool } from '../utils/db-pool'

export const test = async (req: Request, res: Response) => {
  const createTableText = `
    CREATE EXTENSION IF NOT EXISTS "pgcrypto";
    CREATE TABLE IF NOT EXISTS testtable (
      data JSONB
    );
  `
  await pool.query(createTableText)
  const testData = { data: 'test' }
  await pool.query('INSERT INTO testtable(data) VALUES($1)', [testData])
  const { rows } = await pool.query('SELECT * FROM testtable')
  console.log(rows)
}
