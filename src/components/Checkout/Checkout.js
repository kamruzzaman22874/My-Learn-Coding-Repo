import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const selectedCourse = useLoaderData();
    const {image , details , name , course_fee} = selectedCourse
    return (
			<section class='text-gray-600 body-font'>
				<div class='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
					<img
						class='lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded'
						alt='hero'
						src={image}
					/>
					<div class='text-center lg:w-2/3 w-full'>
						<div className='flex justify-between'>
							<h1 class='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
								{name}
							</h1>
							<h1>({course_fee})</h1>
						</div>
						<p class='mb-8 leading-relaxed text-justify'>{details}</p>
						<div class='flex justify-center'>
							<button class='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
								Button
							</button>
							<button class='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
								Checkout
							</button>
						</div>
					</div>
				</div>
			</section>
		);
};

export default Checkout;