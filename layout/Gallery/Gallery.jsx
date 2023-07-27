'use client';

import '@styles/layout/Gallery.scss';
import { data } from '@constants';
import { images } from '@constants';
import { SubHeading } from '@components';
import Link from 'next/link';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Thumbs, Navigation, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';

const Gallery = () => {
	const gallery = data.galleryImages;

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
					{/* Main swiper */}

					{/* Thumbs swiper */}
					<Swiper
						loop={false}
						spaceBetween={10}
						slidesPerView={3}
						watchSlidesProgress
						modules={[Navigation, Thumbs, A11y]}
						navigation={{
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						}}
						className='mySwiper2'
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
							1440: {
								slidesPerView: 3,
							},
						}}>
						{gallery &&
							gallery.map((img, i) => (
								<SwiperSlide key={`image-${i}`}>
									<Image
										src={img.imgUrl}
										placeholder='blur'
										alt={img.alt}
										loading='lazy'
										style={{
											maxWidth: '100%',
											height: 'auto',
										}}
										as='image'
										sizes='(max-width: 550px) 30rem, (max-width: 1200px) 35rem, 33vw'
									/>
								</SwiperSlide>
							))}
					</Swiper>
					<div className='custom-pagination'>
						<button className='swiper-button swiper-button-prev'>
							<BsChevronDoubleLeft />
						</button>
						<button className='swiper-button swiper-button-next'>
							<BsChevronDoubleRight />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
