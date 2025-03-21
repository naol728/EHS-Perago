const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  postionData: [],
  postionparent: [],
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
      }
  
  },
});
export const { addPostion, setPostionparent, setFormdata,setToast } = postion.actions;
export default postion.reducer;
