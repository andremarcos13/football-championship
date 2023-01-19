import { Router } from 'express';
import Leaderboard from '../service/LeaderboardService';
import LeaderboardController from '../controller/LeaderboardController';

const leaderboardService = new Leaderboard();
const leaderboardController = new LeaderboardController(leaderboardService);

const router = Router();

router.get('/', leaderboardController.leaderboard);
router.get('/home', leaderboardController.hleaderboard);
router.get('/away', leaderboardController.aleaderboard);

export default router;
