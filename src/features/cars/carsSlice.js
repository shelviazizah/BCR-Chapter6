import { createSlice } from '@reduxjs/toolkit';
export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    filteredCars: []
  },
  reducers: {
    updateFilteredCars: (state, action) => {
      state.filteredCars = action.payload;
    },
  },
});
export const { updateFilteredCars } = carsSlice.actions;
export default carsSlice.reducer;
