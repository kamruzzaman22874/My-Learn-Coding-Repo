import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Pdf from 'react-to-pdf';
const ref = React.createRef();
const Details = () => {
	const courseDetails  = useLoaderData();
	const { id, image, name, course_fee, details } = courseDetails;
	
	return (
		<div className='max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100 w-11/12 mx-auto'>
			<div className='mt-2'>
				<Pdf targetRef={ref} filename='course-details.pdf'>
					{({ toPdf }) => (
						<button className='btn btn-warning font-bold my-8 text-center' onClick={toPdf}>
							<span className='mr-2'>DOWNLOAD PDF</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={2}
								stroke='currentColor'
								className='w-6 h-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'
								/>
							</svg>
						</button>
					)}
				</Pdf>
			</div>

			<article

				ref={ref}
			>
				<img src={image} alt='course-img' />
				<h2 className='text-xl font-bold'>{name}</h2>
				<p className='mt-4 dark:text-gray-400 text-justify'>{details}</p>
				<div className='flex items-center mt-8 space-x-4'>
					<div className='flex justify-between w-full'>
						<h3 className='text-sm font-medium'>Course Fee: {course_fee}</h3>
						<p>Course ID: {id}</p>
					</div>
				</div>
				<Link
					to={`/course/checkout/${id}`}
					type='button'
					className='flex items-center my-4 justify-center w-full p-3 font-semibold tracking-wide rounded-md btn dark:bg-violet-400 dark:text-gray-900'
				>
					Get Premium
				</Link>
			</article>
		</div>
	);
};

export default Details;