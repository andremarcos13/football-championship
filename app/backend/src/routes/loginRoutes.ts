import { Router } from 'express';
import UserService from '../service/UserService';
import UserController from '../controller/UserController';
import userEmailPasswordValidate from '../middlewares/validations';
import Jwt from '../utils/Jwt';

const router = Router();

const jwt = new Jwt();
const userService = new UserService(jwt);
const userController = new UserController(userService);

router.post('/', userEmailPasswordValidate, (req, res) => userController.login(req, res));
router.get('/validate', userController.tokenValidate);
export default router;
