import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ResetPassword from "./pages/ResetPassword";
import MainLayout from "./components/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
