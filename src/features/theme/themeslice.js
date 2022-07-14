import { createSlice } from '@reduxjs/toolkit'

const initialThemeState = {
    theme : "cupcake"
}

export const themeSlice = createSlice({
    name : 'theme',
    initialState : initialThemeState,
    reducers : {
        changeTheme : (state, action) => {
           state.theme = action.payload
        }
    }
});

export const { changeTheme }  = themeSlice.actions;


export default themeSlice.reducer;