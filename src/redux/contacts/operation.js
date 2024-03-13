import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://65e4bceb3070132b3b2537d3.mockapi.io';
export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const addContact = createAsyncThunk('contacts/addContact', async (contacts, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', contacts);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${taskId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
