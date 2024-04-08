import { configureStore } from '@reduxjs/toolkit';
import { templatesReducer } from './templatesReducer';
import { rootReducers } from './rootReducers';

export const store = configureStore({
  reducer: { ...rootReducers },
});
