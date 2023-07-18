'use client';
import '@styles/layout/Intro.scss';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { images } from '@constants';
const Intro = () => {
	const [playVideo, setPlayVideo] = useState(false);
	const vidRef = useRef();
	return (
		<div className='app__video'>
			<video
				autoPlay={false}
				muted
				playsinline={true}
				poster={images.welcome613}
				paused='true'
				loop
				width={500}
				height={500}
				ref={vidRef}>
				<source src='/assets/meal.mp4' />
				<Image src={images.welcome613} alt='Fallback video image' />
			</video>
			<div className='app__video-overlay'>
				<div
					className='app__video-overlay__circle'
					onClick={() => {
						setPlayVideo(!playVideo);
						if (playVideo) {
							vidRef.current.pause();
						} else {
							vidRef.current.play();
						}
					}}>
					{playVideo ? (
						<BsPauseFill color='#fff' fontSize={30} />
					) : (
						<BsFillPlayFill color='#fff' fontSize={30} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Intro;
