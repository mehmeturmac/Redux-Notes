import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    items: localStorage.getItem('notes')
      ? JSON.parse(localStorage.getItem('notes'))
      : [
          {
            id: '1',
            note: 'Learn Redux',
            color: '#999999',
          },
        ],
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
});

export const { addNote, editNote, delNote, search } = notesSlice.actions;
export default notesSlice.reducer;
