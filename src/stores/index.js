import { configureStore } from "@reduxjs/toolkit";

import positions from "./positions";
import tables from "./tables";

const store = configureStore({
  reducer: {
    positions,
    tables
  }
})

export default store;