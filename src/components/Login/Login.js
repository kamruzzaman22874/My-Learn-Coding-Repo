import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import './Login.css'

const Login = () => {
	const { signIn, googleSignUp, githubSignUp } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.form?.pathname || '/';

    const handleLoginSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
				form.reset();
                console.log(user);
				navigate(from, { replace: true });
            })
        .catch(error => console.log(error))
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
						<h1 className='text-3xl font-bold'>Please Login now!</h1>
					</div>
					<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
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
								<button className='btn btn-primary'>Login</button>
							</div>
							<div className='form-control mt-6'>
								<div px-6>
									<button
										onClick={googleSignIn}
										className='btn btn-primary bg-slate-300 mt-4 mr-2'
									>
										<FcGoogle></FcGoogle>
									</button>
									<button
										onClick={githubSignIn}
										className='btn btn-primary bg-slate-300 mt-4'
									>
										<BsGithub></BsGithub>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
};

export default Login;