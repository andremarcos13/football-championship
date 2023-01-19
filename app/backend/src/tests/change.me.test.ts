import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
import Users from '../database/models/UserModel';

import { Response } from 'superagent';

import { validUser,noEmail,noPassword,invalidEmail, invalidPassword, token } from './mocks/loginMocks';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Testes', () => {
  beforeEach(() => {
    sinon.stub(Users, "findOne").resolves(validUser as Users);
  })
  afterEach(() => {
    (Users.findOne as sinon.SinonStub).restore()
  })

  it('login nao deve acontecer quando o campo email nao eh preenchido', async () => {
    const response = await chai.request(app).post('/login').send(noEmail);
    expect(response.status).to.be.equal(400)
    expect(response.body.message).to.be.equal('All fields must be filled')
  });
  it('login nao deve acontecer quando o campo password nao eh preenchido', async () => {
    const response = await chai.request(app).post('/login').send(noPassword);
    expect(response.status).to.be.equal(400)
    expect(response.body.message).to.be.equal('All fields must be filled')
  });
});
