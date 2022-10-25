import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider';

const Signup = () => {
    const { createNewUser, updateUserProfile } = useContext(AuthContext);
    
     const handleSignSubmit = (e) => {
				e.preventDefault();
				const form = e.target;
				const name = form.name.value;
				const email = form.email.value;
                const password = form.password.value;
                console.log(name , email , password);
         createNewUser(email, password)
						.then((result) => {
							const user = result.user;
                            console.log(user);
                            form.reset()
						})
						.catch((error) => {
							console.log(error);
                        });
         
         
    };
    
    return (
			<div className='hero min-h-screen bg-base-200 mt-0'>
				<div className='hero-content flex-col'>
					<div className='text-center lg:text-left mt-[-30px]'>
						<h1 className='text-2xl font-bold'>Please Signup now!</h1>
					</div>
					<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 login'>
						<form onSubmit={handleSignSubmit} className='card-body '>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Name</span>
								</label>
								<input
                                type='text'
                                name='name'
									placeholder='name'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Photo URL</span>
								</label>
								<input
                                type='text'
                                name='PhotoUrl'
									placeholder='choose photo'
									className='input input-bordered'
								/>
							</div>
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
									<Link href='#' className='label-text-alt link link-hover'>
										Already have an account? or Signup
									</Link>
								</label>
							</div>
							<div className='form-control mt-6'>
								<button className='btn btn-primary'>Sign Up</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
};

export default Signup;