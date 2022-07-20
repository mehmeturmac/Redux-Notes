import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    items: [
      {
        id: '1',
        note: 'deneme',
        color: '#999999',
      },
    ],
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    editNote: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      state.items[itemIndex] = action.payload;
    },
    delNote: (state, action) => {
      const filtered = state.items.filter((item) => item.id !== action.payload);
      state.items = filtered;
    },
  },
});

export const { addNote, editNote, delNote } = notesSlice.actions;
export default notesSlice.reducer;
