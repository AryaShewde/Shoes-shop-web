import { createSlice } from '@reduxjs/toolkit';
import CardsData from "../../components/CardData";

const initialState = {
  data: CardsData,
  selectedCategory: 'All',
  searchText: ''
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    }
  }
});

export const { setCategory, setSearchText } = dataSlice.actions;
export default dataSlice;