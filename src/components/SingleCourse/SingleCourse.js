import React from 'react';

const SingleCourse = ({details}) => {
	// console.log(de)
    return (
			<div className='card card-side bg-base-100 shadow-xl'>
				<figure>
					<img src='https://placeimg.com/200/280/arch' alt='Movie' />
				</figure>
				<div className='card-body'>
                <h2 className='card-title'>{details.name}</h2>
					<p>Click the button to watch on Jetflix app.</p>
					<div className='card-actions justify-end'>
						<button className='btn btn-primary'>Watch</button>
					</div>
				</div>
			</div>
		);
};

export default SingleCourse;