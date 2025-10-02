import { createSlice } from "@reduxjs/toolkit";
import {subwaystationIndex} from '../thunks/subwaystationThunk.js'
const subwaystationSlice = createSlice({
  name: 'subwaystationSlice',
  initialState:{
    list: null,
  },
  reducers : {
    setList(state, action){
      state.list = action.payload;
    }
  },
  extraReducers: builder =>{
    builder
      .addCase(subwaystationIndex.fulfilled,(state,action)=>{
        console.log(action.payload,action.type);
        state.list = action.payload;
      })
      .addMatcher(
        action =>  action.type.startsWith('subwaystationSlice') && action.type.endsWith('/pending'),
        (state, action)=>{
          console.log('처리중입니다.', action.type);
        }
      )
      .addMatcher(
        action => action.type.startsWith('subwaystationSlice') && action.type.endsWith('/rejected'),
        (state, action) => {
          console.error(action.error);
        }
      )
  }
})



export default subwaystationSlice.reducer;