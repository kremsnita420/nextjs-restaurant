import '@styles/layout/Chef.scss';
import { images } from '@constants';
import Image from 'next/image';
import { SubHeading } from '@components';
import { useTranslations } from 'next-intl';

const Chef = () => {
	const t = useTranslations('chefs-word');

	return (
		<section
			className='app-chef'
			style={{
				backgroundImage: `url(${images.bg.src})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'repeat',
				backgroundAttachment: 'fixed',
			}}>
			<div className='section__wrapper'>
				<div className='app-chef__image'>
					<Image src={images.chef} placeholder='blur' alt='Chef' />
				</div>
				<div className='app-chef__desc'>
					<SubHeading
						title={t('chefs-word-subheading')}
						align='flex-start'
						fontStyle='small_sub_heading'
					/>
					<div className='large_sub_heading'>
						<h2>{t('chefs-word-title')}</h2>
					</div>
					<p className='app-chef__desc__quote'>
						<Image
							src={images.quote}
							as='image'
							placeholder='blur'
							loading='lazy'
							alt={t('chefs-word-image-alt')}
						/>
						{t('chefs-word-quote')}
					</p>
					<p className='app-chef__desc__chef'>
						<span className='app-chef__desc__chef__name'>Kevin Smith</span>
						<span className='app-chef__desc__chef__title'>
							{t('chefs-word-job')}
						</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Chef;
