
import { Route, Routes } from 'react-router';
import './App.css';
import Login from './pages/Access/Login/Login';
import Register from './pages/Access/Register/Register';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home';
import Inventories from './pages/Inventories/Inventories';
import MyItems from './pages/MyItems/MyItems';
import Footer from './pages/Shared/Footer/Footer';
import NotFound from './pages/Shared/NotFound/NotFound';
import Header from './pages/Shared/Header/Header';
import UpdateInfo from './pages/UpdateInfo/UpdateInfo';
import ResetPass from './pages/Access/ResetPass/ResetPass';
import RequiredAuth from './pages/Access/RequiredAuth/RequiredAuth';
import { ToastContainer } from 'react-toastify';
import AddItems from './pages/AddItems/AddItems';




function App() {
  return ( 
    <>
      <Header></Header>
      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/resetPass" element={<ResetPass></ResetPass>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/myItems" element={<MyItems></MyItems>}></Route>
          <Route path="/inventories" element={
              <RequiredAuth>
                   <Inventories></Inventories>
               </RequiredAuth>}></Route>
          <Route path="/myItems/:updateId" element={
              <RequiredAuth>
                  <MyItems></MyItems>
              </RequiredAuth>}></Route>
          <Route path="/updateInfo/:updateId" element={
              <RequiredAuth>
                 <UpdateInfo></UpdateInfo>
              </RequiredAuth>}></Route>
          <Route path="/addItems" element={
             <RequiredAuth>
                <AddItems></AddItems>
             </RequiredAuth>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
