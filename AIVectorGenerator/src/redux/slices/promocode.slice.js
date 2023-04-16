import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const promocodeSlice = createSlice({
  name: 'promocodes',
  initialState,
  reducers: {
    addCodes: (state, action) => {
        state.value = action.payload
    },
    },
})

// Action creators are generated for each case reducer function
export const {addCodes} = promocodeSlice.actions

export default promocodeSlice.reducer