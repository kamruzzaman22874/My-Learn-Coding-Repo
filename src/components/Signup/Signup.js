import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Signup = () => {

	const { createNewUser, updateUserProfile} =
		useContext(AuthContext);
	const handleSignSubmit = (e) => {
		e.preventDefault()
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const photoURL = form.photoURL.value;
		console.log(name, email, password, photoURL);
		createNewUser(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				form.reset()
				UpdateProfileInfo(name,photoURL);
			})
			.catch((error) => console.error(error));
		
		const UpdateProfileInfo = (name, photoURL) => {
			const profile = {
				displayName: name,
				photoURL: photoURL,
			};
			updateUserProfile(profile)
				.then(() => {})
				.catch((error) => {
					console.error(error);
					
				});
		};

	}


	
    return (
			<div className='hero min-h-screen bg-base-200 mt-0'>
				<div className='hero-content flex-col'>
					<div className='text-center lg:text-left mt-[-30px]'>
						<h1 className='text-2xl font-bold'>Please Signup now!</h1>
					</div>
					<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
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
									<Link to='/login' className='label-text-alt link link-hover'>
										Already have an account? Login
									</Link>
								</label>
								<div className='form-control mt-6'>
									<button className='btn btn-primary'>Sign Up</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
};

export default Signup;