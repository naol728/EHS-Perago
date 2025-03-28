const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  postionData: [],
  postionparent: [],
  selectedPostion: null,
  formdata: {
    name: "",
    description: "",
    parent_id: undefined,
  },
  toast: {
    message: "",
    type: "",
  },
};
const postion = createSlice({
  name: "postion",
  initialState,
  reducers: {
    addPostion(state, action) {
      state.postionData = [...action.payload];
    },
    setPostionparent(state, action) {
      state.postionparent = action.payload;
    },
    setFormdata(state, action) {
      state.formdata = {
        ...state.formdata,
        ...action.payload,
      };
    },
    setToast(state, action) {
      state.toast = {
        message: action.payload.message,
        type: action.payload.type,
      };
    },
    setSelectedPostion(state, action) {
      state.selectedPostion = action.payload;
    },
    handleChangepostiondata(state, action) {
      if (state.selectedPostion) {
        state.selectedPostion = {
          ...state.selectedPostion,
          name: action.payload.name,
          description:
            action.payload.description || state.selectedPostion.description,
        };
      }
    },
  },
});
export const {
  addPostion,
  setPostionparent,
  setFormdata,
  setToast,
  setSelectedPostion,
  handleChangepostiondata,
} = postion.actions;
export default postion.reducer;
