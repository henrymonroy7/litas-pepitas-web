import "./App.css";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HideAppBar from "./components/HideAppBar/HideAppBar";
import { CssBaseline, Container } from "@mui/material";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <CssBaseline />
        <HideAppBar />
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<p>categoryId</p>} />
            <Route path="*" element={<h4>PÁGINA NO ENCONTRADA</h4>} />
          </Routes>
        </Container>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
