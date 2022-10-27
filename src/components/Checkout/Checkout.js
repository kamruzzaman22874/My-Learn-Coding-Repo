import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from 'react-to-pdf';
import { FaFileDownload } from 'react-icons/fa';
const ref = React.createRef();
const Checkout = () => {
    const selectedCourse = useLoaderData();
    const {image , details , name , course_fee} = selectedCourse
    return (
		<div>
			<Pdf targetRef={ref} filename='code-example.pdf'>
				{({ toPdf }) => (
					<button onClick={toPdf}>
						<FaFileDownload className='text-secondary text-2xl mx-5'></FaFileDownload>
					</button>
				)}
			</Pdf>
			<div className='mt-2' ref={ref}>
				<Link herf='/foldername/file'>
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
								<h1 className='lg:text-3xl'>Course Fee: ({course_fee})</h1>
							</div>
							<p class='mb-8 leading-relaxed text-justify'>{details}</p>
							<div class='flex justify-center'>
								<Link to='/' class='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
									Go Previous
								</Link>
								<button class='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
									Checkout
								</button>
							</div>
						</div>
					</div>
				</section>
				</Link>
			</div>
			</div>
		);
};

export default Checkout;