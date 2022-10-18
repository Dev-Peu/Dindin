import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

// function Protected({ redirecionarPara }) {
//   const auth = true;

//   return auth ? <Outlet /> : <Navigate to={redirecionarPara} />;
// }

export default function DindinRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<Register />} />
    </Routes>
  );
}
