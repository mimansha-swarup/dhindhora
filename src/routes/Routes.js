import { Routes, Route } from "react-router-dom";
import { HomePage, LoginPage } from "../pages";
export const AllRoutes = () =>{

  return <Routes>

    <Route path="/" element={<HomePage/>} />
    <Route path="/login" element={<LoginPage/>} />

  </Routes>
} 