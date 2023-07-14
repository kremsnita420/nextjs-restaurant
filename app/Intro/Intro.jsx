'use client';
import '@styles/layout/Intro.scss';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { useRef, useState } from 'react';

const Intro = () => {
	const [playVideo, setPlayVideo] = useState(false);
	const vidRef = useRef();
	return (
		<div className='app__video'>
			<video autoPlay muted loop width={500} height={500} ref={vidRef}>
				<source src='/assets/meal.mp4' />
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
