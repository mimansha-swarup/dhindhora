import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export function RequiresAuth() {
  const {
    auth: { token },
  } = useSelector((state) => state);

  return token ? <Outlet /> : <Navigate to="/login" replace />;
}
