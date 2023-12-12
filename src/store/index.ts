import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user'
import  ContainerStateReducer  from './slices/ContainerState';
import CurrentProjectReducer from './slices/currentProject'



const store = configureStore({
    reducer: {
        user: userReducer,
        containerState: ContainerStateReducer,
        currentProject: CurrentProjectReducer,
        // tab: tabReducer,
        // language: langReducer,
        // username: usernameReducer
    },
})


export type store = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch
export default store
