import Router from 'express';
import fileController from '../controllers/fileController.js'

const router = new Router();

router.post('/file', fileController.createFile)
router.get('/file', fileController.getAllFile)
router.put('/file/:id', fileController.updateFile)
router.delete('/file/:id', fileController.deleteFile)

export default router;