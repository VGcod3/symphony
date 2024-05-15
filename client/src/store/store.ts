import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from './userSlice';
import activeRoomSlice from './activeRoomSlice';

const rootReducer = combineReducers({
  activeRoom: activeRoomSlice,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: rootReducer,
  // Add any middleware or enhancers here
});

type AppStore = typeof store;

export default store;

export { type AppStore };
