import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {store} from '../index'

interface IContainerState {
    name: string,
}

const initialState: IContainerState = {
    name: 'projects',
}
export const ContainerStateSlice = createSlice({
    name:'containerState',
    initialState,
    reducers:{
       
        setCurrentContainerState:(state, action:PayloadAction<string>) =>{
            state.name = action.payload;
        },
       
    }
})

export const {setCurrentContainerState} = ContainerStateSlice.actions;

export default ContainerStateSlice.reducer