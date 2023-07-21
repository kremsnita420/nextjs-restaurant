import '@styles/layout/History.scss';
import { Stats, SubHeading } from '@components';
import Image from 'next/image';
import { images } from '@constants';

const History = () => {
	return (
		<section className='app__history'>
			<div className='section__wrapper'>
				<SubHeading
					title='Our history'
					align='center'
					fontStyle='small_sub_heading'
				/>
				<div className='large_sub_heading'>
					<h2>Serving customers for over a decade</h2>
				</div>
				<div className='app__history__content'>
					<div className='app__history__content__left'>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
							pharetra adipiscing ultrices vulputate posuere tristique. In sed
							odio nec aliquet eu proin mauris et.
						</p>

						<Image
							className='app-aboutus__middle__knife'
							src={images.trattoria}
							alt='Knife'
							as='image'
							placeholder='blur'
							loading='lazy'
							style={{
								width: '100%',
								height: 'auto',
							}}
							sizes='(max-width: 550px) 20rem, (max-width: 1200px) 45rem, 55rem'
						/>
					</div>
					<div className='app__history__content__right'>
						<Image
							className='app-aboutus__middle__knife'
							src={images.trattoria2}
							alt='Knife'
							as='image'
							placeholder='blur'
							loading='lazy'
							style={{
								width: '100%',
								height: 'auto',
							}}
							sizes='(max-width: 550px) 20rem, (max-width: 1200px) 45rem, 55rem'
						/>
						<Stats />
					</div>
				</div>
			</div>
		</section>
	);
};

export default History;
