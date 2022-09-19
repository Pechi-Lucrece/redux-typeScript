import {createSlice, PayloadAction } from '@reduxjs/toolkit'


interface CounterState { //définit la struture de l'application avec ses différents attributs
    value : number
}

const initialState: CounterState = {
    value : 0
}

const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers:{   //méthodes qui vont être manipulé par le programme
        add(state){
            state.value++
        },
        multiplication(state, action: PayloadAction<number>){ //action a deux attribut dont payload qui sera manitpulé et un type
            state.value = state.value * action.payload
        },
        substract(state){
            state.value--
        }
    }
})

export const { add, multiplication, substract } = counterSlice.actions //varible qui spécifie les différentes actions qui seront effectuer
export default counterSlice.reducer