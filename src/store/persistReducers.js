import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'Homepage',
      storage,
      whitelist: ['image', 'jobs', 'auth', 'user'],
    },
    reducers
  );
  return persistedReducer;
};
