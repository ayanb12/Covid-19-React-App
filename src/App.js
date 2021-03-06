import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { TotalCases } from "./components/TotalCases";

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <main className="main-section">
          <Header />
        </main>
        <aside className="main-aside">
          <TotalCases />
        </aside>
      </div>
    </BrowserRouter>
  );
}

export default App;
