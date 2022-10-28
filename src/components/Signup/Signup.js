import { getAuth, sendEmailVerification } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import app from '../../firebase/firebase.config';

const auth = getAuth(app)
const Signup = () => {
	const [success, setSuccess] = useState(false);
	const [passwordError, setPasswordError] = useState('');

	const { createNewUser, userprofile } = useContext(AuthContext);
	const handleSignSubmit = (e) => {
		e.preventDefault()
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const photoURL = form.profile.value;
		if (password.length < 6) {
			setPasswordError('password should be at least 6 characters');
			return;
		}
		if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
			setPasswordError('Please provide at least two uppercase');
			return;
		}

		if (!/(?=.*[!@#$&*])/.test(password)) {
			setPasswordError('Please add at least one special character');
			return;
		}
		setPasswordError('');
		createNewUser(email,password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				form.reset()
				emailVerify();
				updateUserDetails(name, photoURL);
				setSuccess(true);
				
			})
			.catch((error) => console.error(error));
		

		const updateUserDetails = (name, photoURL) => {
			userprofile(name, photoURL)
				.then(() => {
					console.log('Profile Updated');
				})
				.catch((error) => {
					console.error(error);
				});
		};
	}

		const emailVerify = () => {
		sendEmailVerification(auth.currentUser).then(() => {
			alert('Please check your email and verify');
		});
	};
    return (
			<div className='hero min-h-screen bg-base-200 mt-0'>
				<div className='hero-content flex-col'>
					<div className='text-center lg:text-left mt-[-30px]'>
						<h1 className='text-2xl font-bold'>Please Signup Now!</h1>
					</div>
					<div className='card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100'>
						<form onSubmit={handleSignSubmit} className='card-body '>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Name</span>
								</label>
								<input
									type='text'
									name='name'
									placeholder='full name'
									required
									className='input input-bordered '
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Photo URL</span>
								</label>
								<input
									type='text'
									name='profile'
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
									required
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
									required
								/>
								<label className='label'>
									<p>
										You have an account?Please <Link to='/login'>Login</Link>
									</p>
								</label>
								{passwordError}
								{success}
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