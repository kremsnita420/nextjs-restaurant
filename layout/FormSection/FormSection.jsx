import '@styles/layout/FormSection.scss';
import { images } from '@constants';
import { ContactForm, SubHeading } from '@components';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const FormSection = () => {
	const t = useTranslations('contact-us');
	return (
		<section
			className='app__form'
			style={{
				backgroundImage: `url(${images.bg.src})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'repeat',
				backgroundAttachment: 'fixed',
			}}>
			<div className='section__wrapper'>
				<div className='app__form__form'>
					<SubHeading
						title={t('contact-us-title')}
						align='flex-start'
						fontStyle='large_sub_heading'
					/>
					<p>{t('contact-us-desc')}</p>
					<ContactForm />
				</div>
				<div className='app__form__image'>
					<Image
						src={images.findus}
						placeholder='blur'
						alt={t('image-alt')}
						loading='lazy'
						style={{
							maxWidth: '100%',
							height: 'auto',
						}}
						as='image'
						sizes='(max-width: 550px) 30rem, (max-width: 1200px) 35rem, 40rem'
					/>
					<div className='app__form__image__g'>
						<Image
							src={images.Gwhite}
							alt={t('g-alt')}
							as='image'
							placeholder='blur'
							loading='lazy'
							style={{
								maxWidth: '100%',
								height: 'auto',
							}}
							sizes='(max-width: 550px) 30rem, (max-width: 1200px) 35rem, 40rem'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FormSection;
