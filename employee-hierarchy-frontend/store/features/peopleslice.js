const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  name: "",
};
const people = createSlice({
  name: "people",
  initialState,
  reducers: {},
});
export const {} = people.actions;
export default people.reducer;
