import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./reduser";

export default configureStore({
  reducer: {
    userState: userReduser,
  },
});
