import "./App.css";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainAppBar from "./components/MainAppBar/MainAppBar";
import { CssBaseline, Container, Fab } from "@mui/material";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ScrollTop from "./components/MainAppBar/ScrollTop";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <CssBaseline />
        <MainAppBar />
        <Container maxWidth="xl" style={{ marginTop: "2%" }}>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<p>categoryId</p>} />
            <Route path="*" element={<h4>PÁGINA NO ENCONTRADA</h4>} />
          </Routes>
        </Container>
        <ScrollTop>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
