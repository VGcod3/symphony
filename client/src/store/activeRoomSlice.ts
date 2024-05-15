import { createSlice } from '@reduxjs/toolkit';

const rooms: string[] = ['Living room', 'Bedroom', 'Kitchen', 'Bathroom', 'Office'];

const initialState: string = rooms[0];

const userSlice = createSlice({
  name: 'activeRoom',
  initialState,
  reducers: {
    setActiveRoom: (state, action) => action.payload,
  },
});

export const { setActiveRoom } = userSlice.actions;
export { rooms };

export default userSlice.reducer;
