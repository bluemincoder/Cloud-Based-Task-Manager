import { createSlice } from "@reduxjs/toolkit";
import { user } from "../../assets/data";

const initialState = {
    user: (() => {
        try {
            const storedUser = localStorage.getItem("userInfo");
            return storedUser ? JSON.parse(storedUser) : user;
        } catch (error) {
            console.error("Error parsing userInfo from localStorage:", error);
            localStorage.removeItem("userInfo"); // Remove invalid data
            return user;
        }
    })(),
    isSidebarOpen: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("userInfo");
    },
    setOpenSidebar: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setCredentials, logout, setOpenSidebar } = authSlice.actions;

export default authSlice.reducer;
