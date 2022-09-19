import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter-slice'
import setPageReducer from "../features/setpage-slice"
import { userName } from '../features/api-slice'

//fonction qui combine tous nos différents reducers
export const store = configureStore({ 
    reducer:{
        counter:counterReducer,
        page: setPageReducer,
        [userName.reducerPath]: userName.reducer
    },
    middleware(getDefaultMiddleware){
        return getDefaultMiddleware().concat(userName.middleware)
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>