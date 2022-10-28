import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
const Checkout = () => {
    const selectedCourse = useLoaderData();
    const {image , details , name , course_fee} = selectedCourse
    return (
			<div>
				<div className='mt-2'>
					<section className='text-gray-600 body-font'>
						<div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
							<img
								className='lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded'
								alt='hero'
								src={image}
							/>
							<div className='text-center lg:w-2/3 w-full'>
								<div className='flex justify-between'>
									<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
										{name}
									</h1>
									<h1 className='lg:text-3xl'>Course Fee: ({course_fee})</h1>
								</div>
								<p className='mb-8 leading-relaxed text-justify'>{details}</p>
								<div className='flex justify-center gap-5'>
									<Link to='/' className='btn btn-active btn-warning'>
										Go Home
									</Link>
									<button className='btn btn-active btn-warning'>
										Checkout
									</button>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		);
};

export default Checkout;