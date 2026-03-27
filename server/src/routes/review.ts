import { Router, Request, Response } from 'express'

const router = Router()

router.post('/review', (req: Request, res: Response) => {
  const { code } = req.body

  const resp = {
    bugs: ['bugs are dead'],
    security: ['You are secure'],
    suggestions: ['Take a day off']
  }

  res.json(resp)
})

export default router