import { configureStore } from '@reduxjs/toolkit';
import namesSliceReducer from './names.slice';

const store = configureStore({
    reducer: {
        names:namesSliceReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;