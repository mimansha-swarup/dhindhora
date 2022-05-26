import { Routes, Route } from "react-router-dom";
import { BookmarkPage, ExplorePage, HomePage, LoginPage, ProfilePage } from "../pages";
export const AllRoutes = () =>{

  return <Routes>

    <Route path="/" element={<HomePage/>} />
    <Route path="/bookmark" element={<BookmarkPage/>} />
    <Route path="/explore" element={<ExplorePage/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/profile" element={<ProfilePage/>} />

  </Routes>
} 