import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
const filterReducer = filterSlice.reducer;
export default filterReducer;
