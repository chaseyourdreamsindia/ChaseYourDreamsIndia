import { configureStore, createSlice } from '@reduxjs/toolkit';

const Slice = createSlice({
    name:"slice",
    initialState:{
        Auth:false,
    },
    reducers:{
        setAuth(state,actions){
            state.Auth = actions.payload;
        }
    }
});

const Actions = Slice.actions;
const Store = configureStore({reducer:Slice.reducer});

export { Store, Actions };