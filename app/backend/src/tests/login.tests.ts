import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp from 'chai-http';
import * as jwt from 'jsonwebtoken';

import App from '../app';
import Users from '../database/models/UserModel';

import { Response } from 'superagent';

import { validUser,noEmail,noPassword,invalidEmail, invalidPassword, token } from './mocks/loginMocks';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Testes referente as rotas do /login', () => {
    describe('testa se eh possivel realizar login com erros')
})