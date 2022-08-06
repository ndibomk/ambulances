import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../api'
import { toast } from "react-toastify";
import axios from "axios";

export const createCareTaker = createAsyncThunk(
  "caretaker/createCareTaker",
  async (updateddata) => {
    try {
      const response = await api.createCareTaker(updateddata)

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);
// export const getProjects = createAsyncThunk(
//   "project/getProject",
//   async (_, {rejectWithValue}) => {
//     try {
//       const response = await api.getCaretaker()
//         return response.data;
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data);
//     }
//   }
// );
// export const getProjectsByUser = createAsyncThunk(
//   "tour/getProjectsByUser",
//   async (userId, { rejectWithValue }) => {
//     try {
//       const response = await api.getProjectsByUser(userId);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );
  const caretakerSlice= createSlice({
    name: "caretaker",
    initialState: {
      caretaker:[],
      projects:[],
      // userProjects:[],
      error: "",
      loading: false,
    },
    reducers: {
    //   setUser: (state, action) => {
    //     state.user = action.payload;
    //   },
    //   setLogout: (state, action) => {
    //     localStorage.clear();
    //     state.user = null;
    //   },
    },
    extraReducers: {
      [createCareTaker.pending]: (state, action) => {
        state.loading = true;
      },
      [createCareTaker.fulfilled]: (state, action) => {
        state.loading = false;
        state.caretaker = action.payload;
      },
      [createCareTaker.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      // [getProjects.pending]: (state, action) => {
      //   state.loading = true;
      // },
      // [getProjects.fulfilled]: (state, action) => {
      //   state.loading = false;
      //   state.project = action.payload;
      // },
      // [getProjects.rejected]: (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload.message;
      // },
      // [getProjectsByUser.pending]: (state, action) => {
      //   state.loading = true;
      // },
      // [getProjectsByUser.fulfilled]: (state, action) => {
      //   state.loading = false;
      //   state.caretaker = action.payload;
      // },
      // [getProjectsByUser.rejected]: (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload.message;
      // },
    
    
    },
  });
  export default caretakerSlice.reducer;