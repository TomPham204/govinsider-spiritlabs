import { setupServer } from 'msw/node';
import { handlers } from './handlers';

let server;
if (typeof window === 'undefined') {
  console.log('setup server');
  server = setupServer(...handlers);
} else {
  server = {};
}
export { server };
