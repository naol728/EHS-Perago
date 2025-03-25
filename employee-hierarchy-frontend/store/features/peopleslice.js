const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  peopleData: [],
  selectedpeople: null,
  employeeparent: [],
  isPopupOpen: false,
  popuptype: "",
  formdata: {
    name: "",
    description: "",
    position_id: undefined,
  },
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

    setEmployeeparent(state, action) {
      state.employeeparent = action.payload;
    },
    setFormdata(state, action) {
      state.formdata = {
        ...state.formdata,
        ...action.payload,
      };
    },
    setIsPopupOpen(state, action) {
      state.isPopupOpen = action.payload;
    },
    setPopuptype(state, action) {
      state.popuptype = action.payload;
    },
  },
});
export const {
  addPeople,
  setSelectedperson,
  handleChangepersondata,
  setEmployeeparent,
  setFormdata,
  setIsPopupOpen,
  setPopuptype,
} = people.actions;
export default people.reducer;
