const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  postionData: [],
};
const postion = createSlice({
  name: "postion",
  initialState,
  reducers: {
    addPostion(state, action) {
      state.postionData = [...action.payload];
    },
  },
});
export const { addPostion } = postion.actions;
export default postion.reducer;
