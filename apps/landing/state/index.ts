import { configureStore } from '@reduxjs/toolkit';

import reducer from './rootReducer';

export const store = configureStore({
  reducer,
  //   devTools: !!__DEV__,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

// export const persistor = store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
