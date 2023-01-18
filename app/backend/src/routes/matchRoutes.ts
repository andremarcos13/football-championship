import { Router } from 'express';
import MatchService from '../service/MatchService';
import MatchController from '../controller/MatchController';
import Jwt from '../utils/Jwt';
import { matchValidate } from '../middlewares/validations';

const jwt = new Jwt();
const matchService = new MatchService();
const matchController = new MatchController(matchService, jwt);

const router = Router();
router.get('/', matchController.getAll);
router.post('/', matchValidate, matchController.create);
router.patch('/:id/finish', matchController.finishMatch);
router.patch('/:id', matchController.finishMatch);
export default router;
