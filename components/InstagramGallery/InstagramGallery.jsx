'use client';
import '@styles/components/InstagramGallery.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import Image from 'next/image';
import { data } from '@constants';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';

const InstagramGallery = () => {
	const gallery = data.galleryImages;

	return (
		<>
			<Swiper
				loop={true}
				spaceBetween={10}
				slidesPerView={3}
				watchSlidesProgress
				modules={[Navigation, A11y]}
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
								alt={img.altEn}
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
			<div className='custom-navigation'>
				<button className='swiper-button swiper-button-prev'>
					<BsChevronDoubleLeft />
				</button>
				<button className='swiper-button swiper-button-next'>
					<BsChevronDoubleRight />
				</button>
			</div>
		</>
	);
};

export default InstagramGallery;
