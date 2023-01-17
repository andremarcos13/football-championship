import { Router } from 'express';
import UserService from '../service/UserService';
import UserController from '../controller/UserController';
import Jwt from '../utils/Jwt';

const router = Router();

const jwt = new Jwt();
const userService = new UserService(jwt);
const userController = new UserController(userService);
console.log('vou fzer o post no cu do jc');

router.post('/', userController.login);

export default router;
