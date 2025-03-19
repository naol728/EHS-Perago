import { configureStore } from "@reduxjs/toolkit";
import postionreducer from "./features/postionslice";
import peoplereducer from "./features/peopleslice";
const store = configureStore({
  reducer: {
    postions: postionreducer,
    peoples: peoplereducer,
  },
});

export default store;
