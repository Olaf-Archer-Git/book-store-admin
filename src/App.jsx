import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ResetPassword from "./pages/ResetPassword";
import MainLayout from "./components/MainLayout";
import Queries from "./pages/Queries";
import AddBlog from "./pages/AddBlog";
import BlogList from "./pages/BlogList";
import Orders from "./pages/Orders";
import AddBook from "./pages/AddBook";
import BookList from "./pages/BookList";
import Customers from "./pages/Customers";
import Category from "./pages/Category";

///
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="blog" element={<AddBlog />} />
          <Route path="blog-list" element={<BlogList />} />
          <Route path="orders" element={<Orders />} />
          <Route path="book" element={<AddBook />} />
          <Route path="books-list" element={<BookList />} />
          <Route path="queries" element={<Queries />} />
          <Route path="category" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
