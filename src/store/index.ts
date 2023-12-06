import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user'
import  ContainerStateReducer  from './slices/ContainerState';




const store = configureStore({
    reducer: {
        user: userReducer,
        containerState: ContainerStateReducer,
        // tab: tabReducer,
        // language: langReducer,
        // username: usernameReducer
    },
})


export type store = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch
export default store
