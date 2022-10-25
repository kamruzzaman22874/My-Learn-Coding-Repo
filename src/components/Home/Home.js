import React from 'react';

const Home = () => {
	return (
		<div className='bg-gray-400  mb-5'>
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
	);
};

export default Home;
