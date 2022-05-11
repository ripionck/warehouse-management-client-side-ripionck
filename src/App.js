
import { Route, Routes } from 'react-router';
import './App.css';
import Login from './pages/Access/Login/Login';
import Register from './pages/Access/Register/Register';
import AddItem from './pages/AddItem/AddItem';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home';
import Inventories from './pages/Inventories/Inventories';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import UpdateInfo from './pages/UpdateInfo/UpdateInfo';



function App() {
  return (
    <>
      <Header></Header>
      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/inventories" element={<Inventories></Inventories>}></Route>
          <Route path="/updateInfo/:updateId" element={<UpdateInfo></UpdateInfo>}></Route>
          <Route path="/addItem" element={<AddItem></AddItem>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
