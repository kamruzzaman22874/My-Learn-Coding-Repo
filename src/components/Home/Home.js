import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<div className='bg-gray-100  mb-5'>
			<section className='text-gray-600 body-font'>
				<div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
					<div className='lg:flex-grow mt-20 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
						<h1 className='title-font  text-justify sm:text-4xl text-2xl mb-4 font-medium text-gray-900'>
							<span className='text-center mb-2'>Hello Hero!</span>
							<br />
							<br className='hidden lg:inline-block text-justify' />
							Do you want to learn Programming Language and find your first job
							as a programmer?
						</h1>
						<p className='mb-8 leading-relaxed text-justify'>
							Have you ever thought about becoming a software developer or
							looking for a change of career? This article will give you a solid
							plan to get you started in software development and get you your
							first job!
						</p>
						<div className='flex justify-center'>
							<button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
								Visit & See Our Courses
							</button>
						</div>
					</div>
					<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
						<img
							className='object-cover object-center rounded '
							alt='hero'
							src='learn-programming.png'
						/>
					</div>
				</div>
			</section>
		</div>
		<section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Ac mattis
				<span className="dark:text-violet-400">senectus</span>erat pharetra
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
				<br/> className="hidden md:inline lg:hidden">turpis pulvinar, est scelerisque ligula sem
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Suspendisse</Link>
				<Link rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Malesuada</Link>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
		</section>
		</div>
	);
};

export default Home;
