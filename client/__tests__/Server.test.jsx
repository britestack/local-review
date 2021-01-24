const request = require('supertest');

const port = 3000;

// reviews routes

describe('/reviews', () => {
  it('sends get request', (data) => {
    request(`localhost:${port}`)
      .get(`/reviews`)
      .expect(200, data);
  });
});

// features routes

describe('/features', () => {
  it('sends get request', (data) => {
    request(`localhost:${port}`).get('/features').expect(200, data);
  });
});
