import express from 'express';
import * as controller from '../controller/member.js';

const router = express.Router();

router.post('/signup', controller.getSignup);
router.post('/idCheck', controller.getIdCheck);

export default router;