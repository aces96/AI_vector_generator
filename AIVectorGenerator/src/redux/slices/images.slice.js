import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addImages: (state, action) => {
        state.value = action.payload
    },
    },
})

// Action creators are generated for each case reducer function
export const {addImages} = imagesSlice.actions

export default imagesSlice.reducer