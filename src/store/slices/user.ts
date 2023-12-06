import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {store} from '../index'

interface UserState {
    email:  string  | undefined,
    id: number | undefined,
    role: string  | undefined,
}

const initialState: UserState = {
    id: undefined,
    role: undefined,
    email: undefined,
}
export const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setID:(state, action:PayloadAction<number | undefined>) =>{
            state.id = action.payload;
        },
        setRole:(state, action:PayloadAction<string | undefined>) =>{
            state.role = action.payload;
        },
        setEmail:(state, action:PayloadAction<string | undefined>) =>{
            state.email = action.payload;
        },
        setUser:(state, action:PayloadAction<UserState | undefined>) =>{
            state.role = action.payload?.role;
            state.id = action.payload?.id;
            state.email = action.payload?.email
        },
    }
})

export const {setID,setRole,setEmail,setUser} = UserSlice.actions;

export default UserSlice.reducer