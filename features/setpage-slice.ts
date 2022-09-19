import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface PageState {
    value: string
}

const initialState : PageState = {
    value: ""
}

const setpageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        callHello: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})

export const  {callHello } = setpageSlice.actions
export default setpageSlice.reducer