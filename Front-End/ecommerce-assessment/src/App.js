import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AppRoutes from "./Routes/routes.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
