import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TProfile = {
  id: string;
  firstName: string;
  lastName: string;
  isKeepLogin: boolean;
  accessToken?: string;
};

const initialState: TProfile = {
  id: '1',
  firstName: 'Test',
  lastName: 'Ter',
  isKeepLogin: false,
};

export const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<Partial<TProfile>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateProfile } = profile.actions;

export default profile.reducer;
