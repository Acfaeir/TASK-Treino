const request = require('supertest');
const app = require('../server'); // exporte o app no server.js

describe('Testes de sistema - API', () => {
  let token = null;

  it('Registra um novo usuário', async () => {
    const res = await request(app).post('/register').send({
      username: 'teste',
      password: '123'
    });
    expect(res.statusCode).toBe(200);
  });

  it('Faz login', async () => {
    const res = await request(app).post('/login').send({
      username: 'teste',
      password: '123'
    });
    token = res.body.token;
    expect(token).toBeDefined();
  });

  it('Cria uma tarefa', async () => {
    const res = await request(app)
      .post('/tasks')
      .set('Authorization', token)
      .send({ title: 'Estudar Node' });
    expect(res.statusCode).toBe(200);
  });
});
