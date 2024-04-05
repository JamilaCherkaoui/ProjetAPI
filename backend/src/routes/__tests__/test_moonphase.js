import request from 'supertest';
import app from '../../app'; 

describe('GET /api/moon-phase', () => {
  it('responds with moon phase data', async () => {
    // Utilisez un timestamp valide pour le test
    const timestamp = 1710463024; // Exemple de timestamp valide
    const res = await request(app).get(`/api/moon-phase?d=${timestamp}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('Phase');
    expect(res.body).toHaveProperty('Age'); 
  });

  it('responds with an error message if no data found for invalid parameter', async () => {
    const res = await request(app).get('/api/moon-phase?d=invalid');
    expect(res.statusCode).toEqual(200); // Confirmer que l'API renvoie bien un statut 200 pour une requête avec un paramètre invalide
    
    expect(res.body).toHaveProperty('Error_msg', 'invalid date parameter, please provide date as unix-style time stamp.');
  });
  
});
