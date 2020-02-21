import { Response } from 'supertest';
var supertest = require('supertest');
const url = `http://localhost:4000`;
export const request = supertest(url);

/**
 * Execute a query and return the response.
 * @param query GraphQL query to execute
 */
export async function query(query: string | object): Promise<Response> {
  return await request
    .post('/graphql')
    .send({
      query
    })
    .expect(200);
}

/**
 * Execute a mutation and return the response.
 * @param mutation GraphQL mutation to execute
 */
export async function mutation(mutation: string | object): Promise<Response> {
  return await request
    .post('/graphql')
    .send({
      query: mutation
    })
    .expect(200);
}
