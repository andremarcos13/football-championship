import { Router } from 'express';
import TeamController from '../controller/TeamController';
import TeamService from '../service/TeamService';

const router = Router();

const teamService = new TeamService();
const teamController = new TeamController(teamService);

router.get('/', teamController.getAll);

export default router;
