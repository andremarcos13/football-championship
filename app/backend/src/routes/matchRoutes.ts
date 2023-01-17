import { Router } from 'express';
import MatchService from '../service/MatchService';
import MatchController from '../controller/MatchController';

const matchService = new MatchService();
const matchController = new MatchController(matchService);

const router = Router();

router.get('/', matchController.getAll);

export default router;
