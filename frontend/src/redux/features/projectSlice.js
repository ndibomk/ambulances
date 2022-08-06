import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../api'
import { toast } from "react-toastify";
import axios from "axios";
import { url,setHeaders } from "./api";

export const createProject = createAsyncThunk(
  "projects/createProject",
  async (values) => {
    try {
      const response = await api.createTour(values)

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);
export const getProjects = createAsyncThunk(
  "project/getProject",
  async (_, {rejectWithValue}) => {
    try {
      const response = await api.getprojects()
        return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);
export const getProjectsByUser = createAsyncThunk(
  "tour/getProjectsByUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.getProjectsByUser(userId);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
  const projectSlice = createSlice({
    name: "project",
    initialState: {
      project:[],
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
      [createProject.pending]: (state, action) => {
        state.loading = true;
      },
      [createProject.fulfilled]: (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      },
      [createProject.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      [getProjects.pending]: (state, action) => {
        state.loading = true;
      },
      [getProjects.fulfilled]: (state, action) => {
        state.loading = false;
        state.project = action.payload;
      },
      [getProjects.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      [getProjectsByUser.pending]: (state, action) => {
        state.loading = true;
      },
      [getProjectsByUser.fulfilled]: (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      },
      [getProjectsByUser.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
    
    
    },
  });
  export default projectSlice.reducer;