import request from 'supertest';
import app from '../../app'; // Assurez-vous que le chemin est correct

describe('GET /api/interesting-fact', () => {
  it('responds with a fact', async () => {
    const res = await request(app).get('/api/interesting-fact');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBeTruthy();
  });
});
