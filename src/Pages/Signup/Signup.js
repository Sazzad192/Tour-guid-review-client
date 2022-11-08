import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineGoogle, AiFillGithub} from 'react-icons/ai';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Signup = () => {

    const {createUser, googleUser} = useContext(AuthContext);
    const provaider = new GoogleAuthProvider();


    const handelSubmit= event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.password.value;

        createUser(email, pass)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }

    const googleBtn =() =>{
        googleUser(provaider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handelSubmit} className="card-body">

                    <div className="text-center">
                    <h1 className="text-5xl font-bold">Signup now!</h1>
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Name" className="input input-bordered" />
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
                    </div>
                    <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Signup</button>
                    </div>
                    <hr className='my-4' />
                    <div className='flex justify-evenly'>
                        <button onClick={googleBtn} className='btn'><AiOutlineGoogle className='text-bold'/></button>
                        <button className='btn'><AiFillGithub className='text-bold'/></button>
                    </div>
                    <div className='mx-auto'>
                        <Link to={'/login'} className="link link-primary">Do you have an Account? click here</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;