//import { signOut } from '@firebase/auth';
import React from 'react';
//import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CustomLink from '../../../CustomLink/CustomLink';
//import auth from '../../../firebase.init';
import img from '../../../images/books.png';
//import userImg from '../../../images/user-icon.png';
import searchImg from '../../../images/search-icon.png';


const Header = () => {
  //const [user] = useAuthState(auth);

     /* const handleLogOut =()=>{
           signOut(auth);
      } */
    return (
        <div>
            <nav className="navbar navbar-light bg-light ">
              <div className="container-fluid">
                 <Link to="/" className="navbar-brand"><img src={img} alt="" /><span className="ms-3 fw-bold fs-3" style={{fontFamily: 'Rockwell'}}>Genius Book Keeper<Link to="/" className="navbar-brand ms-5"><img src={searchImg} alt="" /></Link></span></Link>
                   <form className="d-flex align-items-center">
                     <CustomLink className="mt-1 me-4 fs-5" style={{fontFamily: 'Rockwell'}} to="/">Home</CustomLink>
                     <CustomLink className="mt-1 me-4 fs-5" style={{fontFamily: 'Rockwell'}} to="/inventories">Inventories</CustomLink>
                     {/* {user && <CustomLink className=" text-dark mt-1 me-4 fs-5" style={{fontFamily: 'Rockwell'}} to="/myItems">My Items</CustomLink>} */}
                     <CustomLink className="mt-1 me-4  fs-5" style={{fontFamily: 'Rockwell'}} to="/blogs">Blogs</CustomLink>
                     <CustomLink className="text-decoration-none mt-1 me-4  fs-5" style={{fontFamily: 'Rockwell'}} to="/register">Register</CustomLink>
                     {/* {user? <div className="d-flex align-items-center"><button className="btn btn-link  fs-5" onClick={()=>signOut(auth)} style={{fontFamily: 'Rockwell'}}>LogOut</button><Link to="/" className="navbar-brand"><img src={userImg} alt="" /></Link></div> */} :
                      <Link className=" me-4 fs-5" to="/login" style={{fontFamily: 'Rockwell'}}>Login</Link> 
                   </form>
              </div>
            </nav>
        </div>   
    );
};

export default Header;