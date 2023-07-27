import '@styles/layout/AboutUsVideo.scss';
import { SubHeading } from '@components';
import { VideoComponent } from '@components';

const AboutUsVideo = () => {
	return (
		<section className='app__aboutus-video'>
			<div className='section__wrapper'>
				<SubHeading
					title='About us'
					align='center'
					fontStyle='small_sub_heading'
				/>
				<div className='large_sub_heading'>
					<h2>Happy Hours with Us</h2>
				</div>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
					adipiscing ultrices vulputate posuere tristique. In sed odio nec
					aliquet eu proin mauris et.
				</p>
				<VideoComponent videoSrc='/assets/meal.mp4' />
			</div>
		</section>
	);
};

export default AboutUsVideo;
