import { configureStore } from "@reduxjs/toolkit";
import { projects } from "./api/projectsApi";
import { Auth } from "./api/authApi";
import { importFiles } from "./api/importApi";
export const makeStore = () => {
  return configureStore({
    reducer: {
      [projects.reducerPath]: projects.reducer,
      [Auth.reducerPath]: Auth.reducer,
      [importFiles.reducerPath]: importFiles.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat([
        projects.middleware,
        Auth.middleware,
        importFiles.middleware,
      ]),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
