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
										<Link to='/' className='btn btn-active btn-primary'>
											Go Home
										</Link>
										<button className='btn btn-active btn-secondary'>
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