const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  peopleData: [],
  selectedpeople: null,
};
const people = createSlice({
  name: "people",
  initialState,
  reducers: {
    addPeople(state, action) {
      state.peopleData = [...action.payload];
    },
    setSelectedperson(state, action) {
      state.selectedpeople = action.payload;
    },
    handleChangepersondata(state, action) {
      if (state.selectedpeople) {
        state.selectedpeople = {
          ...state.selectedpeople,
          name: action.payload.name,
          description:
            action.payload.description || state.selectedpeople.description,
        };
      }
    },
  },
});
export const { addPeople, setSelectedperson,handleChangepersondata } = people.actions;
export default people.reducer;
