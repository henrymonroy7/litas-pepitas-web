import "./App.css";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HideAppBar from "./components/HideAppBar/HideAppBar";
import { CssBaseline, Container } from "@mui/material";
import FilterContainer from "./components/FilterBar/FilterContainer";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <CssBaseline />
        <HideAppBar />
        <Container>
          <Routes>
            <Route path="/" element={<FilterContainer />} />
            <Route path="/category/:categoryId" element={<p>categoryId</p>} />
            <Route path="*" element={<h4>PÁGINA NO ENCONTRADA</h4>} />
          </Routes>
        </Container>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
