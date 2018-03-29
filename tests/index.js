const request = require('supertest');
const server = require('../src');

describe('GET /', () => {
    it('respond with json', (done) => {
        request(server)
        .get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});