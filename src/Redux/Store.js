import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reProduct } from "./Product";
import { reLoading } from './Loading';

const reducer = combineReducers({
  product: reProduct,
  loading:reLoading
});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
