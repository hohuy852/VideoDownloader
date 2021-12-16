import { configureStore } from "@reduxjs/toolkit";
import videoReducer from './reducer/video'
export const store = configureStore({
    reducer:{
        videoReducer 
    }
})

