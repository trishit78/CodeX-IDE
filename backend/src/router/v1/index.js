import express from 'express';
import { pingCheck } from '../../controllers/ping.controller.js';
import projectRouter from './projects.router.js'

const router = express.Router();

router.use('/ping',pingCheck);

router.use('/projects',projectRouter);

export default router;