import { configureStore } from '@reduxjs/toolkit'
import imagesSlice from './slices/images.slice'

export const store = configureStore({
  reducer: {
    images: imagesSlice,
  },
})