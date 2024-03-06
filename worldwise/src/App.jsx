import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepages from "./pages/Homepages";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Cities from "./component/Cities";
// import { useEffect, useState } from "react";
import Country from "./component/Country";
import City from "./component/City";
import Form from "./component/Form";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FeakAuthContext";
import PotectedRoute from "./pages/PotectedRoute";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepages />} />
            <Route path="product" element={<Product />} />
            <Route path="price" element={<Pricing />} />

            <Route path="login" element={<Login />} />
            <Route
              path="app"
              element={
                <PotectedRoute>
                  <AppLayout />
                </PotectedRoute>
              }
            >
              <Route index element={<Navigate to="cities" />} />
              <Route
                path="cities"
                element={
                  <Cities
                  // isLoading={isLoading}
                  // cities={cities}
                  // onDelete={onDelete}
                  />
                }
              />
              <Route path="cities/:id" element={<City />} />
              <Route
                path="country"
                element={
                  <Country
                  // isLoading={isLoading} cities={cities}
                  />
                }
              />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
