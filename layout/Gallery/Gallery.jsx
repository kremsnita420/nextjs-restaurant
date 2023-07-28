import '@styles/layout/Gallery.scss';

import { images } from '@constants';
import { InstagramGallery, SubHeading } from '@components';
import Link from 'next/link';

const Gallery = () => {
	return (
		<div className='app-gallery'>
			<div
				className='app-gallery__bg'
				style={{
					backgroundImage: `url(${images.bg.src})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'repeat',
					backgroundAttachment: 'fixed',
					opacity: 0.5,
				}}></div>
			<div className='section__wrapper'>
				<div className='app-gallery__text'>
					<SubHeading
						title='Instagram'
						align='flex-start'
						fontStyle='small_sub_heading'
					/>
					<div className='large_sub_heading'>
						<h2>Photo gallery</h2>
					</div>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
						alias iste culpa eos distinctio fuga nihil facere illo impedit,
						quisquam aspernatur quasi reprehenderit ipsa architecto, molestiae.
					</p>

					<Link href='/' type='button' className='gold__button'>
						View more
					</Link>
				</div>
				<div className='app-gallery__images'>
					<InstagramGallery />
				</div>
			</div>
		</div>
	);
};

export default Gallery;
