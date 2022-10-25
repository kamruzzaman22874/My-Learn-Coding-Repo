import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
			<div className='navbar bg-gray-200 shadow-lg mt-2 m-2'>
				<div className='navbar-start'>
					<div className='dropdown'>
						<label tabIndex={0} className='btn btn-ghost lg:hidden'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h8m-8 6h16'
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
						>
							<li>
								<Link>Courses</Link>
							</li>
							<li tabIndex={0}>
								<Link className='justify-between'>Faq</Link>
							</li>
							<li>
								<Link>Blog</Link>
							</li>
						</ul>
					</div>
					<div className='flex mx-auto mt-2'>
						<img
							className='lg:w-[50px] w-12  lg:ml-2  rounded-xl'
							src='navbar-logo.jpg'
							alt=''
						/>
						<Link className='btn btn-ghost ml-[7px] normal-case lg:text-xl italic mr-0 text-gray-500'>
							Learning Programming
						</Link>
					</div>
				</div>
				<div className='navbar-center hidden lg:flex text-gray-400 text-xl font-bold mt-2 px-4'>
					<ul className='menu menu-horizontal p-0 px-2'>
						<li className='px-2'>
							<Link to='/courses'>Courses</Link>
						</li>
						<li tabIndex={0} className='px-2'>
							<Link>FAQ</Link>
						</li>
						<li>
							<Link>Blog</Link>
						</li>
					</ul>
				</div>
				<div className='navbar-end lg:mr-20 mt-5'>
					<Link to='/login' className='btn btn-gray-400 bg-slate-400'>
						Login
					</Link>
				</div>
			</div>
		);
};

export default Navbar;