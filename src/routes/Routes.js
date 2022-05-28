import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  BookmarkPage,
  ExplorePage,
  HomePage,
  LoginPage,
  ProfilePage,
} from "../pages";
import { RequiresAuth } from "./requiresAuth";
export const AllRoutes = () => {
  const {
    auth: { token, userData },
  } = useSelector((state) => state);
  console.log(userData);
  return (
    <Routes>
      <Route element={<RequiresAuth />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      {token ? (
        <Route path="/login" element={<Navigate to="/" replace />} />
      ) : (
        <Route path="/login" element={<LoginPage />} />
      )}
    </Routes>
  );
};
