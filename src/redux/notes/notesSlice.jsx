import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://631b3a0edc236c0b1ef0bc09.mockapi.io';

export const getNotesAsync = createAsyncThunk('getNotesAsync', async () => {
  const { data } = await axios.get(apiUrl + '/todos');
  return data;
});

export const addNoteAsync = createAsyncThunk('addNoteAsync', async (note) => {
  const { data } = await axios.post(apiUrl + '/todos', note);
  return data;
});

export const updateNoteAsync = createAsyncThunk('updateNoteAsync', async (note) => {
  const { data } = await axios.put(apiUrl + '/todos/' + note.id, note);
  return data;
});

export const deleteNoteAsync = createAsyncThunk('deleteNoteAsync', async (id) => {
  const { data } = await axios.delete(apiUrl + '/todos/' + id);
  return data;
});

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    items: [],
    getLoading: false,
    addLoading: false,
    error: '',
    activeFilter: '',
  },
  reducers: {
    search: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
  extraReducers: {
    // Get Notes
    [getNotesAsync.pending]: (state) => {
      state.getLoading = true;
    },
    [getNotesAsync.fulfilled]: (state, action) => {
      state.getLoading = false;
      state.items = action.payload;
    },
    [getNotesAsync.rejected]: (state, action) => {
      state.getLoading = false;
      state.error = action.error.message;
    },
    // Add Note
    [addNoteAsync.pending]: (state) => {
      state.addLoading = true;
    },
    [addNoteAsync.fulfilled]: (state, action) => {
      state.addLoading = false;
      state.items.push(action.payload);
    },
    [addNoteAsync.rejected]: (state, action) => {
      state.addLoading = false;
      state.error = action.error.message;
    },
    // Update Note
    [updateNoteAsync.fulfilled]: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      state.items[itemIndex] = action.payload;
    },
    // Delete Note
    [deleteNoteAsync.fulfilled]: (state, action) => {
      const filtered = state.items.filter((item) => item.id !== action.payload.id);
      state.items = filtered;
    },
  },
});

export const { search } = notesSlice.actions;
export default notesSlice.reducer;
