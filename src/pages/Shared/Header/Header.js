import { signOut } from '@firebase/auth';
import React from 'react';
import CustomLink from '../../../CustomLink/CustomLink';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import img from '../../../images/books.png';
import userImg from '../../../images/user-icon.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';


const Header = () => {
  const [user] = useAuthState(auth);
  
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
               <Container>
               <Navbar.Brand to="#home"><img src={img} alt="" /><span className="ms-2 fw-bold fs-4" style={{fontFamily: "Rockwell"}}>Genius Book Keeper</span></Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                 <Nav className="me-auto">
                   <CustomLink className="text-decoration-none ms-4 fs-5" to="/">Home</CustomLink>
                   <CustomLink className="text-decoration-none ms-4 fs-5"  to="/inventories">Manage Items</CustomLink>
                   {user && <CustomLink className="text-decoration-none ms-4 fs-5"  to="/myItems">My Items</CustomLink>}
                   <CustomLink className="text-decoration-none ms-4 fs-5" to="/blogs">Blogs</CustomLink>
                 </Nav>
                 <Nav>
                     {user? <div className="d-flex align-items-center"><button className="btn btn-link text-decoration-none fs-5 logout-btn" onClick={()=>signOut(auth)} style={{fontFamily: 'Rockwell'}}>LogOut</button><img style={{height:"40px"}} src={userImg} alt="" /></div>  :
                      <Link className="text-decoration-none fs-5 login-btn" to="/login" style={{fontFamily: 'Rockwell'}}>Login</Link> }
                 </Nav>
               </Navbar.Collapse>
               </Container>
            </Navbar>
        </div>   
    );
};

export default Header;