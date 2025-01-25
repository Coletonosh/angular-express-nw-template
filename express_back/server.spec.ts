import request from 'supertest'; // Importamos Supertest
import { app } from './server'; // Importamos tu aplicación Express

describe('GET /', () => {
  it('should return a message "Express + TypeScript Server"', async () => {
    const response = await request(app).get('/'); // Hacemos la solicitud GET

    // Verificamos que la respuesta sea exitosa (status 200)
    expect(response.status).toBe(200);

    // Verificamos el contenido de la respuesta
    expect(response.text).toBe('Express + TypeScript Server');
  });
});
