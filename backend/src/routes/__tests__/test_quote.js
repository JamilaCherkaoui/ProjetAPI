import request from 'supertest';
import app from '../../app'; 

describe('GET /api/inspiring-quote', () => {
  it('responds with an inspiring quote and author', async () => {
    const res = await request(app).get('/api/inspiring-quote');
    expect(res.statusCode).toEqual(200);
    
    expect(res.body[0]).toHaveProperty('q'); // Vérifie que le premier élément du tableau contient la citation
    expect(res.body[0]).toHaveProperty('a'); // Vérifie que le premier élément du tableau contient l'auteur de la citation
  });
  
});
