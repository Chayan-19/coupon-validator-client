import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Discount from "./components/discount";
import ListCodes from "./components/listCodes";
import CreateDiscount from "./components/createDiscount";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/discount"  element={<Discount/>}/>
          <Route path="/" element={<Navigate replace to="/discount" />} />
          <Route path="/create-discount-code" element={<CreateDiscount/>}/>
          <Route path="/list-discount-codes" element={<ListCodes/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
