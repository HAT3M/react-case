import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  firstTable: {
    head: [],
    body:[]
  },
  secondTable: {
    head: [],
    body:[]
  },
  loading: false,
  error: "",
}

export const fetchFirstTable = createAsyncThunk("fetchFirstTable", async () => {
  const response = await axios.get('/data.json');
  return response.data.firstTable;
})

export const fetchSecondTable = createAsyncThunk("fetchSecondTable", async () => {
  const response = await axios.get('/data.json');
  return response.data.secondTable;
})

const tables = createSlice({
  name: 'tables',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.secondTable.body = [
        ...state.secondTable.body,
        action.payload
        
      ]
    },
    updateFilter: (state, action) => {
      state.firstTable.head = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFirstTable.fulfilled, (state, action) => {
      state.firstTable = action.payload
      state.status = 'success'
    });
    
    builder.addCase(fetchSecondTable.fulfilled, (state, action) => {
      state.secondTable = action.payload
      state.status = 'success'
    });
  }
})

export const { addData, updateFilter } = tables.actions
export default tables.reducer;