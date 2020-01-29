//@ts-nocheck
// TODO: Create .env variable for heroku URL and post it here.
import supertest from 'supertest';

const request = supertest('https://mobix-react-native-redux.herokuapp.com');

test('The server must be running', () => {
	return request.get('/').then((res: any) => expect(res.status).toBe(200));
});

test('Should return all feature1 data', () => {
	return request.get('/feature1').then((res: any) => {
		expect(res.status).toBe(200);
		expect(res.body.length).toBeGreaterThan(0);
		expect(Object.keys(res.body[0])).toEqual(
			expect.arrayContaining(['id', 'title', 'description']),
		);
	});
});
