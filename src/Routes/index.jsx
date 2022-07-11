import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import TesteRoute from "../pages/TesteRoute";

export default function RoutesLogic() {

  return (

    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/"
          element={<TesteRoute />}
        />
      </Routes>
    </BrowserRouter>

  );
}