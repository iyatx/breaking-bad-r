import { createSlice } from '@reduxjs/toolkit';

type AppStateType = {};

const initialState: AppStateType = {
  groups: [],
  currentGroup: null,
  loading: false,
};

export const { actions: appActions, reducer: appReducer } = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});
