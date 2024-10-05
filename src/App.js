import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./features/productSlice";
import { router } from "./routes/router";
import { RouterProvider } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
