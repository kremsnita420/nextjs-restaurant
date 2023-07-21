import '@styles/components/Newsletter.scss';
import { SubHeading } from '@components';
import React from 'react';

const Newsletter = () => {
	return (
		<div className='app__newsletter'>
			<div className='section__wrapper'>
				<div className='section__wrapper__inline'>
					<div className='app__newsletter__content'>
						<SubHeading
							title='Newsletter'
							align='center'
							fontStyle='small_sub_heading'
						/>
						<div className='large_sub_heading'>
							<h2>Subscribe to our newsletter</h2>
						</div>
						<p className='app__newsletter__p'>And never miss latest Updates!</p>
						<div className='app__newsletter__form'>
							<input
								required
								type='email'
								id='news-email'
								name='news-email'
								placeholder='Email address'
								className='app__newsletter__form__email'
							/>
							<button className='gold__button' type='submit'>
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
