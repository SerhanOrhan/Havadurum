import {configureStore} from '@reduxjs/toolkit'
import storeReducer from './store'

export default configureStore({
    reducer:{
        store: storeReducer,
    },
})