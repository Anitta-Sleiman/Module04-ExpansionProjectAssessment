import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../Pages/home.js";
import Login from "../Pages/login.js";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        

      </Routes>
    </>
  );
};
export default AppRoutes;
