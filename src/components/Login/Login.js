import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import './Login.css'

const Login = () => {
	const { userSignIn, googleSignUp, githubSignUp } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const handleUserLogin = event => { 
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		
		userSignIn(email, password)
			.then(result => {
				const user = result.user;
				console.log(email , password , user);
				form.reset();
				navigate(`${from}`)
			})
			.catch(error => {
				console.log("Error Found", error)
			})
		
	}
		
		
		
		const googleSignIn = () => {
			googleSignUp()
				.then((result) => {
					const user = result.user;
					console.log(user);
				})
				.catch((error) => console.error(error));
		};
		const githubSignIn = () => {
			githubSignUp()
				.then((result) => {
					const user = result.user;
					console.log(user);
				})
				.catch((error) => console.log(error));
		};

    return (
			<div className='hero min-h-screen bg-base-200 '>
				<div className='hero-content flex-col'>
					<div className='text-center lg:text-left'>
						<h1 className='text-3xl font-bold'>Please Login Now!</h1>
					</div>
					<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
						<form onSubmit={handleUserLogin} className='card-body '>
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
									type='text'
									name='password'
									placeholder='password'
									className='input input-bordered'
								/>
								<label className='label'>
									<p>
										Forgot password? or
										<Link
											to='/signup'
											className='label-text-alt link link-hover'
										>
											<span> Signup</span>
										</Link>
									</p>
								</label>
							</div>
							<div className='form-control mt-6'>
								<button className='btn btn-warning'>Login</button>
							</div>
							<div className='form-control mt-6 flex '>
								<button onClick={googleSignIn} className='btn btn-warning mb-2'>
									<span className='text-2xl'>
										<FcGoogle></FcGoogle>
									</span>
									<span className='px-2'>Google Sign In</span>
								</button>
								<button onClick={githubSignIn} className='btn btn-warning'>
									<span className='text-2xl'>
										<BsGithub></BsGithub>
									</span>
									<span className='px-2'>Github Sign In</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
};

export default Login;
