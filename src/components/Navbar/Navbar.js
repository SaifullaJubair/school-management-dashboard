import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {

   const { user, logOut } = useContext(AuthContext)
   const handleLogOut = () => {
      logOut()
         .then(() => { })
         .catch(error => console.log(error))
   }


   return (
      <div data-theme="wireframe">
         <div className="navbar bg-base-100 py-5">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                     <li><Link to='/'>Home</Link></li>
                     <li><Link to='/blog'>Blog</Link>
                     </li>
                     {
                        user?.uid ?
                           <>
                              <li><Link to='dashboard'> DashBoard</Link></li>
                              <li><button className='nav' onClick={handleLogOut} > Logout</button></li>

                           </>
                           :
                           <>
                              <li><Link to='/register'>SignUp</Link></li>
                              <li><Link to='/login'>Login</Link></li>
                           </>
                     }
                  </ul>
               </div>
               <Link to='/' className="btn btn-ghost normal-case text-xl">
                  <div className='flex items-center ml-2 font-bold lg:text-3xl text-base'>
                     <img className='lg:w-14 w-10 mr-2' src='https://i.ibb.co/1R5TbcM/image.png' alt="" />
                     <h3 className=''> SJSchool</h3>
                  </div>
               </Link>
            </div>

            <div className="mr-6 navbar-end">
               <div className=" hidden  lg:flex lg:text-lg font-semibold">
                  <ul className="menu menu-horizontal">

                     <li className='mx-1'><Link to='/blog'>Blog</Link></li>


                     {
                        user?.uid ?
                           <>
                              <li><Link to='/dashboard'> DashBoard</Link></li>
                              <button className='mx-2 lg:text-lg text-xs font-semibold nav' onClick={handleLogOut}> Logout</button>

                           </>
                           :
                           <>
                              <li><Link to='/register' className='mx-1 lg:text-lg text-xs font-semibold nav'>SignUp</Link></li>
                              <li><Link to='/login' className='mr-1 lg:text-lg text-xs font-semibold nav'>Login</Link></li>
                           </>
                     }
                  </ul>
               </div>

               <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>

               <Link to='/user'>
                  {
                     user?.photoURL ?
                        <>
                           <img title={user?.displayName} className='h-12 rounded-full ' src={user?.photoURL} alt="User_Photo" />
                        </>
                        :
                        <span><FaUser title={user?.displayName} ></FaUser> </span>
                  }

               </Link>
            </div>
         </div>
      </div>
   );
};

export default Navbar;