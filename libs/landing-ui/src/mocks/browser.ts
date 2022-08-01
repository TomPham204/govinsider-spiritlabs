import { setupWorker, SetupWorkerApi } from 'msw';
import { handlers } from './handlers';
// This configures a Service Worker with the given request handlers.
let worker: SetupWorkerApi;
if (typeof window === 'object') {
  worker = setupWorker(...handlers);
}

export { worker };
