import { Router, Request, Response } from 'express'

import reviewCode from '../services/claude'

const router = Router()

router.post('/review', async(req: Request, res: Response) => {

 try{ const { code } = req.body

    const reviewed = await reviewCode(code)

    res.json(reviewed)

    }catch(error){
       console.error(error)
       res.status(500).json({error: 'Something went wrong' })
     }
})

export default router
