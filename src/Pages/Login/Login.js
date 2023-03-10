import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { AiOutlineGoogle, AiFillGithub} from 'react-icons/ai';
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const {userSignin, googleUser} = useContext(AuthContext);
    const provaider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handelSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;

        console.log(email, pass)

        userSignin(email, pass)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            form.reset();
            navigate(from, {replace:true})
          })
          .catch((error) => {
            setError(error.message);
          });
        
    }

    const handelGoogle = () =>{
        googleUser(provaider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user)
            redirect('/')
            // ...
          }).catch((error) => {
            setError(error.message);
            setError(error.customData.email);
            setError(GoogleAuthProvider.credentialFromError(error));
            // ...
          });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSubmit} className="card-body">

                        <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-red-400 text-lg'>{error}</p>
                        <hr className='my-4' />
                        <div className='flex justify-evenly'>
                            <button onClick={handelGoogle} className='btn'><AiOutlineGoogle className='text-bold'/></button>
                            <button className='btn'><AiFillGithub className='text-bold'/></button>
                        </div>
                        <div className='mx-auto'>
                            <Link to={'/signup'} className="link link-primary">Do not have an Account? click here</Link>
                        </div>
                    </form>
                </div>
        </div>
    );
};

export default Login;