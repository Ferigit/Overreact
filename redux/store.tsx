import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import switchRedux from "./toggle";

export const store = configureStore({
  reducer: {
    swicthTheme: switchRedux,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
