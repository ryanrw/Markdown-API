import { Request, Response } from 'express'

/**
 * Index of this API
 */
export const index = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      description: 'Welcome to markdown api!',
    })
  } catch (err) {
    console.error(err)
  }
}
