import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'Homepage',
      storage,
      whitelist: ['image'],
    },
    reducers
  );
  return persistedReducer;
};
