'use strict'

const supertest = require('supertest')
const logger = require('../src/middleware/logger');
const server = require('../src/server');
const request = supertest(server.app);

describe('testing middleware functions', () => {

    test('logger logs methods and headers, calls next', () => {

        let requestObject = {
            headers: 'test',
            method: 'test'
        }
        let responseObject = {} 
        let nextFunction = jest.fn();
        console.log = jest.fn(); 

        logger(requestObject, responseObject, nextFunction);
        expect(nextFunction).toHaveBeenCalled();
        expect(console.log).toHaveBeenCalledWith('test', 'test'); 
    });

    it('testing for bad routes', async () => {
        const response = await request.get('/foo');
        expect(response.status).toEqual(404);
    })
    it('Testing for good routes', async () => { 
        const response = await request.get('/person');
        expect(response.status).toEqual(200); 
    })

})