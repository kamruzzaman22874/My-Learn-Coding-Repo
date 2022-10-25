import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import './Login.css'

const Login = () => {
    const {signIn} =useContext(AuthContext)

    const handleLoginSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
            })
        .catch(error => console.log(error))
    }
    return (
			<div className='hero min-h-screen bg-base-200 '>
				<div className='hero-content flex-col'>
					<div className='text-center lg:text-left'>
						<h1 className='text-3xl font-bold'>Please Login now!</h1>
					</div>
					<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 login'>
						<form onSubmit={handleLoginSubmit} className='card-body '>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									type='email'
									name='email'
									placeholder='email'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Password</span>
								</label>
								<input
									type='password'
									name='password'
									placeholder='password'
									className='input input-bordered'
								/>
								<label className='label'>
									<Link to='/signup' className='label-text-alt link link-hover'>
										Forgot password? or <span>Signup</span>
									</Link>
								</label>
							</div>
							<div className='form-control mt-6'>
								<button className='btn btn-primary'>Login</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
};

export default Login;