import '@styles/layout/Gallery.scss';

import { images } from '@constants';
import { InstagramGallery, SubHeading } from '@components';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Gallery = () => {
	const t = useTranslations('photo-gallery');

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
						<h2>{t('photo-gallery-title')}</h2>
					</div>
					<p>{t('photo-gallery-desc')}</p>

					<Link href='/' type='button' className='gold__button'>
						{t('view-more')}
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
