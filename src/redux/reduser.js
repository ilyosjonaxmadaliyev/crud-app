import { createSlice } from "@reduxjs/toolkit";
import users from "../data/db";
import { userImage } from "../assets";
import { toast } from "react-toastify";

const defaultValue = {
  userItems: users,
  userCount: users.length,
};

const userItemsLocalStorage = () => {
  return JSON.parse(localStorage.getItem("data")) || defaultValue;
};

const userSlice = createSlice({
  name: "user",
  initialState: userItemsLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      state.userItems.push(action.payload);
      state.userCount += 1;
      localStorage.setItem( 'data', JSON.stringify( state ) )
      toast.success('Created new item !')
    },
    editItem: (state, action) => {
      const { ...updatedUserInfo } = action.payload;
      const { id, imgUrl, first_name, last_name, job, dob, country, email } =
      updatedUserInfo;
      const updatedUser = state.userItems.find((user) => user.id == id);
      if (updatedUser) {
        updatedUser.imgUrl = imgUrl || userImage;
        updatedUser.first_name = first_name;
        updatedUser.last_name = last_name;
        updatedUser.job = job;
        updatedUser.dob = dob;
        updatedUser.country = country;
        updatedUser.email = email;
        localStorage.setItem("data", JSON.stringify(state));
      }
      toast.success('Updated user info !')
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      const data = state.userItems.filter((fuser) => fuser.id !== id);
      state.userItems = data;
        state.userCount -= 1;
      localStorage.setItem( "data", JSON.stringify( state ) );
      toast.info("Deleted user item !")
    },
  },
});

export const { addItem, removeItem, editItem } = userSlice.actions;
export default userSlice.reducer;
