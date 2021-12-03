import { createSlice } from '@reduxjs/toolkit'
export const store = createSlice({
    name: 'store',
    initialState: {
        dark: false,
    },
    reducers: {
        setDarkmode: state => {
            state.dark = !state.dark
        }
    }
})
export const { setDarkmode } = store.actions
export default store.reducer