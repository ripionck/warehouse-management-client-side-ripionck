
import { Route, Routes } from 'react-router';
import './App.css';
import Login from './pages/Access/Login/Login';
import Register from './pages/Access/Register/Register';
import AddItem from './pages/AddItem/AddItem';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home';
import Inventories from './pages/Inventories/Inventories';
import MyItems from './pages/DisplayMyItems/DisplayMyItems';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import UpdateInfo from './pages/UpdateInfo/UpdateInfo';
import MySelections from './pages/MySelections/MySelections';
import ResetPass from './pages/Access/ResetPass/ResetPass';
import RequiredAuth from './pages/Access/RequiredAuth/RequiredAuth';




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
          <Route path="/inventories" element={<Inventories></Inventories>}></Route>
          <Route path="/mySelections" element={<MySelections></MySelections>}></Route>
          <Route path="/myItems/:updateId" element={
              <RequiredAuth>
                  <MyItems></MyItems>
              </RequiredAuth>}></Route>
          <Route path="/updateInfo/:updateId" element={
              <RequiredAuth>
                 <UpdateInfo></UpdateInfo>
              </RequiredAuth>}></Route>
          <Route path="/addItem" element={
             <RequiredAuth>
                <AddItem></AddItem>
             </RequiredAuth>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
