import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router";
import LoginPage from "./pages/login/login";
import EnteredPage from "./pages/entered/entered";

import { AppWraper, HeaderText } from "./styled-components/styled-components";

function App() {
  return (
    <AppWraper>
      <HeaderText>ONLY.</HeaderText>
      <Routes>
        <Route path="/login" element={<LoginPage key={"login"} />} />
        <Route path="/entered" element={<EnteredPage key={"entered"} />} />
      </Routes>
    </AppWraper>
  );
}

export default App;
