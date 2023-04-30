import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { Helmet } from 'react-helmet-async';
// import useToken from '../../hooks/useToken';

const Login = () => {
   const { signIn, signInGoogle } = useContext(AuthContext)
   const { register, formState: { errors }, handleSubmit } = useForm();
   const [loginError, setLoginError] = useState('')
   const [loginUserEmail, setLoginUserEmail] = useState('');
   const location = useLocation()
   const navigate = useNavigate()
   const from = location.state?.from?.pathname || '/'

   // const [token] = useToken(loginUserEmail);
   // if (token) {
   //    navigate(from, { replace: true })
   // }
   const handleLogin = (data) => {
      // console.log(data)
      setLoginError('')
      signIn(data.email, data.password)
         .then(res => {
            const user = res.user
            // console.log(user);
            navigate(from, { replace: true })
            setLoginUserEmail(data.email)
            toast.success('Successfully login')

         })
         .catch(error => {
            console.error(error)
            setLoginError(error.message)
         })

   }
   const handleGoogleSignIn = () => {
      signInGoogle()
         .then(res => {
            const user = res.user;
            // console.log(user)
            saveUser(user?.displayName, user?.email)
         })
         .catch(error => {
            console.error(error);
         })
   }
   const saveUser = (name, email) => {
      const user = { name, email, role: "buyer" };
      fetch('https://mobosell-server-a12.vercel.app/users', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(user)
      })
         .then(res => res.json())
         .then(data => {
            setLoginUserEmail(email)
         })
   }
   return (
      <div>
         <Helmet>
            <title>LogIn</title>
         </Helmet>
         <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 mx-auto my-12 ">
            <h1 className="text-2xl font-bold text-center">Login</h1>


            <form onSubmit={handleSubmit(handleLogin)} className="space-y-6 ng-untouched ng-pristine ng-valid">

               <div className="space-y-1 form-control">
                  <label className="block dark:text-gray-200">Email</label>

                  <input type='email'
                     {...register("email", { required: 'Email is required' })}
                     className="w-full px-4 py-3 rounded-md border border-primary dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                  {errors.email && <p className='text-red-600'> {errors.email?.message}</p>}
               </div>

               <div className="space-y-1 form-control">
                  <label
                     className="block dark:text-gray-200">Password
                  </label>

                  <input
                     {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be 6 character or long" }
                     })}
                     type="password"
                     name="password"
                     id="password"
                     className="w-full px-4 py-3 rounded-md border border-secondary dark:bg-gray-900 focus:dark:border-violet-400"
                  />
                  {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                  {loginError && <p className='text-red-600'>{loginError}</p>}

                  <div className="flex justify-end text-xs dark:text-gray-200">
                     <Link >Forgot Password?</Link>
                  </div>
               </div>
               <input
                  type="submit"
                  value="Login"
                  className="block w-full p-3 text-center rounded-lg dark:text-gray-900 bg-gradient-to-r from-primary to-secondary " />
            </form>
            <div className="flex items-center pt-4 space-x-1">
               <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
               <p className="px-3 text-sm dark:text-gray-100">Login with social accounts</p>
               <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
               <button aria-label="Log in with Google" className="p-3 rounded-sm" onClick={handleGoogleSignIn}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                     <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
               </button>
            </div>
            <p className="text-sm text-center sm:px-6 dark:text-gray-400">Don't have an account?
               <Link to='/register' className="underline dark:text-gray-100">  Sign up</Link>
            </p>
         </div>
      </div>
   );
};

export default Login;