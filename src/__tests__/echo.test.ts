import { server } from '../server';
import { sendMessage } from '../client';

const address = 'localhost';
const port = 3001;

beforeAll(() => new Promise(resolve => server.listen({ host: address, port: port }, () => resolve('start'))));

test('echo, Hello World', async () => {
  const reply = await sendMessage(address, port, 'Hello World');

  expect(reply).toBe('Hello World');
});

test('echo, こんにちは、世界', async () => {
  const reply = await sendMessage(address, port, 'こんにちは、世界');

  expect(reply).toBe('こんにちは、世界');
});

afterAll(() => new Promise(resolve => server.close(() => resolve('end'))));
