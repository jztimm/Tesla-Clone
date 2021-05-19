import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: [ "Model S", "Model 3", "Model X", "Model Y" ]
}

const carSlice = createSlice({
  name: "car",
  // reads initialState
  initialState,
  // reducers are functions used to manipulate the state. Ex, adding a new car
  reducers: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer