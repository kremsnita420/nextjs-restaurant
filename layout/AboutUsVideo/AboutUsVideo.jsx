import '@styles/layout/AboutUsVideo.scss';
import { SubHeading } from '@components';
import { VideoComponent } from '@components';
import { useTranslations } from 'next-intl';

const AboutUsVideo = () => {
	const t = useTranslations('about-us-video');
	return (
		<section className='app__aboutus-video'>
			<div className='section__wrapper'>
				<SubHeading
					title={t('subheading')}
					align='center'
					fontStyle='small_sub_heading'
				/>
				<div className='large_sub_heading'>
					<h2>{t('title')}</h2>
				</div>

				<p>{t('quote')}</p>
				<VideoComponent videoSrc='/assets/meal.mp4' />
			</div>
		</section>
	);
};

export default AboutUsVideo;
