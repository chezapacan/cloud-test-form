import { configureStore } from '@reduxjs/toolkit';
import userFormReducer from './slices/userForm/userFormSlice';
import { userFormApi } from './api/userFormApi';

export const store = configureStore({
  reducer: {
    userFormReducer,
    [userFormApi.reducerPath]: userFormApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userFormApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
