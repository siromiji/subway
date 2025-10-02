import { configureStore } from "@reduxjs/toolkit"
import subwaystationReducer from './slices/subwaystationSlice.js'

export default configureStore({
  reducer:{
    subwaystation : subwaystationReducer,
  }
});