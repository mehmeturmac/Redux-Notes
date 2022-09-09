import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://631b3a0edc236c0b1ef0bc09.mockapi.io';

export const getTodosAsync = createAsyncThunk('todos/getTodosAsync', async () => {
  const { data } = await axios.get(apiUrl + '/todos');
  return data;
});

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    items: [],
    activeFilter: '',
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem('notes', JSON.stringify(state.items));
    },
    editNote: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      state.items[itemIndex] = action.payload;
      localStorage.setItem('notes', JSON.stringify(state.items));
    },
    delNote: (state, action) => {
      const filtered = state.items.filter((item) => item.id !== action.payload);
      state.items = filtered;
      localStorage.setItem('notes', JSON.stringify(state.items));
    },
    search: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
  extraReducers: {
    [getTodosAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addNote, editNote, delNote, search } = notesSlice.actions;
export default notesSlice.reducer;
