//@ts-nocheck
import supertest from 'supertest';
const request = supertest('http://localhost:3000');

test('The server must be running', () => {
	return request.get('/').then((res: any) => expect(res.status).toBe(200));
});

test('Should be return all feature1 list', () => {
	return request.get('/feature1').then((res: any) => {
		expect(res.status).toBe(200);
		expect(res.body.length).toBeGreaterThan(0);
		expect(Object.keys(res.body[0])).toEqual(
			expect.arrayContaining(['id', 'title', 'description']),
		);
	});
});
