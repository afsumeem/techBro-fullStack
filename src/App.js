import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import "./App.css"
import About from "./pages/About/About"

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path="about" element={<About />}></Route>
        <Route path="products" element={<PrivateRoute><BlogDetails /></PrivateRoute>}></Route>
        <Route path="contact" element={<PrivateRoute><BlogDetails /></PrivateRoute>}></Route>


        {/* <Route path="/dashboard" element={<AdminRoute><Dashboard /></AdminRoute>}> */}
        {/* 
          <Route path="/dashboard" element={<AdminRoute><DashboardHome /></AdminRoute>}></Route>
          <Route path="/dashboard/makeAdmin" element={<AdminRoute><MakeAdmin /></AdminRoute>}></Route>
          <Route path="/dashboard/Allblogs" element={<AdminRoute><AllBlogs /></AdminRoute>}></Route>
          <Route path="/dashboard/article" element={<AdminRoute><WriteArticle /></AdminRoute>}></Route> */}

        {/* </Route> */}

        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />

      </Routes>
    </AuthProvider>
  );
}

export default App;
