import { configureStore} from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import themeReducer from '../features/theme/themeslice'

export const store = configureStore({
    reducer : {
        themeReducer,
        cartReducer
    }
});


