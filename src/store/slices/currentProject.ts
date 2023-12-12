import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {store} from '../index'

interface ICurrentProjectState {
    name: string | undefined,
}

const initialState: ICurrentProjectState = {
    name: undefined,
}
export const currentProjectSlice = createSlice({
    name:'currentProject',
    initialState,
    reducers:{
       
        setCurrentProjectState:(state, action:PayloadAction<string | undefined>) =>{
            state.name = action.payload;
        },
       
    }
})

export const {setCurrentProjectState} = currentProjectSlice.actions;

export default currentProjectSlice.reducer