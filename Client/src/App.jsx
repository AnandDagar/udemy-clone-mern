import React from "react";
import AuthPage from "./pages/auth";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
};

export default App;
