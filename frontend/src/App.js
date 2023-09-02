import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,

} from "./routes/Routes.js";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import {  loadUser } from "./redux/actions/user";
import ProtectedRoute from "./routes/ProtectedRoute";

// import axios from "axios";
// import { server } from "./server";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import Dashboard from "./pages/Dashboard";

const App = () => {

  useEffect(() => {
    Store.dispatch(loadUser());

  }, []);

  return (
    <BrowserRouter>
 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
          />
          <Route path="/dashboard" element={ <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>} />

          </Routes>

    
         
      <ToastContainer
        position="top-center"
        autoClose={5000}        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
};

export default App;
