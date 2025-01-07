/* eslint-disable no-undef */
const chai = require('chai');
const request = require('supertest');
const { url } = require('../../utils/constant');

const { expect } = chai;

describe('GET /hello Endpoint', () => {
  it('should successfully return the Helloworld message', async () => {
    // Sende eine GET-Anfrage an /hello
    const response = await request(url).get('/hello').expect(200);

    // Überprüfen, ob die Antwort die erwartete Nachricht enthält
    expect(response.body).to.have.property('message', 'Helloworld');
  });
});
