import { createSlice } from "@reduxjs/toolkit";

const localData = localStorage.getItem('positions') !== null ? JSON.parse(localStorage.getItem('positions')) : {};

const initialState = {
  verticalPosition: {
    first: localData?.verticalPosition?.first || '',
    second: localData?.verticalPosition?.second || '',
  },
  topHorizontalPosition: {
    first: localData?.topHorizontalPosition?.first || '',
    second: localData?.topHorizontalPosition?.second || '',
  },
  bottomHorizontalPosition: {
    first: localData?.bottomHorizontalPosition?.first || '',
    second: localData?.bottomHorizontalPosition?.second || '',
  },
  isChange: false,
}

const positions = createSlice({
  name : 'positions',
  initialState,
  reducers: {
    updateVerticalPosition: (state, action) => {
      state.verticalPosition = action.payload;
    },
    updateTopHorizontalPosition: (state, action) => {
      state.topHorizontalPosition = action.payload;
    },
    updateBottomHorizontalPosition: (state, action) => {
      state.bottomHorizontalPosition = action.payload;
    },
    updateChange: (state, action) => {
      state.isChange = action.payload;
    },
    updateAllPositions: (state, action) => {
      state.verticalPosition = action.payload.verticalPosition
      state.topHorizontalPosition = action.payload.topHorizontalPosition
      state.bottomHorizontalPosition = action.payload.bottomHorizontalPosition
    }
  }
})

export const { updateVerticalPosition, updateTopHorizontalPosition, updateBottomHorizontalPosition, updateChange, updateAllPositions } = positions.actions;
export default positions.reducer;