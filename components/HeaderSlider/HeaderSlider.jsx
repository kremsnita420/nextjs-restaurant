'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, A11y, Pagination, Autoplay } from 'swiper/modules';
import { images } from '@constants';
import { SubHeading } from '@components';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import Link from 'next/link';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';

const HeaderSlider = ({ data }) => {
	return (
		<>
			<Swiper
				loop={true}
				autoplay={{
					delay: 3500,
					disableOnInteraction: false,
				}}
				spaceBetween={10}
				slidesPerView={1}
				watchSlidesProgress
				pagination={{
					clickable: true,
				}}
				modules={[Navigation, A11y, Autoplay, Pagination]}
				className='mySwiper3'>
				{data.map((slide, i) => (
					<SwiperSlide key={`slide-${i}`}>
						<div className='app-header__slide'>
							<div className='app-header__info'>
								<SubHeading
									title={slide.subTitle}
									align='flex-start'
									fontStyle='small_sub_heading'
								/>
								<h1>{slide.heading}</h1>
								<p>{slide.pText}</p>
								<Link href='/' type='button' className='gold__button'>
									{slide.link}
								</Link>
							</div>
							<div className='app-header__image'>
								<Image
									src={images.welcome613}
									placeholder='blur'
									alt={slide.imageAlt}
									as='image'
									loading='lazy'
									style={{
										maxWidth: '100%',
										height: '100%',
									}}
									sizes='(max-width: 550px) 100vw, (max-width: 1200px) 50vw, 33vw'
								/>
							</div>
						</div>
					</SwiperSlide>
				))}{' '}
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

export default HeaderSlider;
