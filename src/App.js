import Main from "./components/pages/Main";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Blog from "./components/pages/Blog";
import AddPost from "./components/pages/addPost/AddPost";
import Register from "./components/pages/register/Register";
import Login from "./components/pages/login/Login";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getUser} from "./redux/features/auth/authSlice";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser())
    }, [dispatch]) //for every page reload check auth

  return (
    <Router basename="https://demi-portfolio.onrender.com/">
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='blog' element={<Blog/>}></Route>
          <Route path='/blog/new' element={<AddPost/>}></Route>
          <Route path='/blog/register' element={<Register/>}></Route>
          <Route path='/blog/login' element={<Login/>}></Route>
        </Routes>
        <ToastContainer position="bottom-right" style={{
            position: "fixed",
        }}/>
    </Router>
  );
}

export default App;
