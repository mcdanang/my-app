import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: null,
  data: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedInUser: (state, action) => {
      if (state.status != 'success') {
        state.status = action.payload.status;
        state.data = {...action.payload.data};
      };
    },
    removeLoggedInUser: (state) => {
      state.status = null;
      state.data = null;
    }
  },
})

export const { setLoggedInUser, removeLoggedInUser, } = userSlice.actions

export default userSlice.reducer