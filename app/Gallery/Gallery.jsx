'use client';

import '@styles/layout/Gallery.scss';
import { images } from '@constants';
import { SubHeading } from '@components';
import Link from 'next/link';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';

const Gallery = () => {
	console.log(isMobile);
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
					<Swiper
						// install Swiper modules
						modules={[Navigation, A11y]}
						spaceBetween={50}
						slidesPerView={1}
						navigation
						pagination={{ clickable: true }}
						breakpoints={{
							550: {
								slidesPerView: 2,
							},
							868: {
								slidesPerView: 3,
							},
							1280: {
								slidesPerView: 2,
							},
						}}
						onSwiper={(swiper) => console.log(swiper)}
						onSlideChange={() => console.log('slide change')}>
						<SwiperSlide>
							<Image
								src={images.gallery01}
								placeholder='blur'
								alt='Gallery image'
								loading='lazy'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								src={images.gallery02}
								placeholder='blur'
								alt='Gallery image'
								loading='lazy'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								src={images.gallery03}
								placeholder='blur'
								alt='Gallery image'
								loading='lazy'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								src={images.gallery04}
								placeholder='blur'
								alt='Gallery image'
								loading='lazy'
							/>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
