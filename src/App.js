import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <main className="main-section">
          <Header />
        </main>
        <aside className="main-aside">
          <h1>hello</h1>
        </aside>
      </div>
    </BrowserRouter>
  );
}

export default App;
