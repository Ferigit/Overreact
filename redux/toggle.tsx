import {
    createSlice,
    PayloadAction,
  } from '@reduxjs/toolkit';
  import type { RootState } from '../redux/store';
  
  
  export type CounterState = {
    activeTheme: string;
  };
  
  const initialState: CounterState = {
    activeTheme: "light",
  };
  
  
  export const switchRedux = createSlice({
    name: 'swicthTheme',
    initialState,
  reducers: {
    setActiveTheme: (state, action: PayloadAction<string>) => {
        state.activeTheme = action.payload;
      },
    },
  });
  // Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
  export const {
    setActiveTheme,
  } = switchRedux.actions;
  
  export const getToggle = (state: RootState) => state.swicthTheme.activeTheme;
  
  export default switchRedux.reducer;