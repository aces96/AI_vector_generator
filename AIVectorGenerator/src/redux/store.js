import { configureStore } from '@reduxjs/toolkit'
import imagesSlice from './slices/images.slice'
import promocodeSlice from './slices/promocode.slice'

export const store = configureStore({
  reducer: {
    images: imagesSlice,
    promocode: promocodeSlice
  },
})