const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  peopleData: [],
};
const people = createSlice({
  name: "people",
  initialState,
  reducers: {
    addPeople(state, action) {
      state.peopleData = [...action.payload];
    },
  },
});
export const { addPeople } = people.actions;
export default people.reducer;
