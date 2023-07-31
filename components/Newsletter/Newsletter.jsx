import '@styles/components/Newsletter.scss';
import { SubHeading } from '@components';
import React from 'react';
import { useTranslations } from 'next-intl';

const Newsletter = () => {
	const t = useTranslations('newsletter');
	return (
		<div className='app__newsletter'>
			<div className='section__wrapper'>
				<div className='section__wrapper__inline'>
					<div className='app__newsletter__content'>
						<SubHeading
							title={t('newsletter-subheading')}
							align='center'
							fontStyle='small_sub_heading'
						/>
						<div className='large_sub_heading'>
							<h2>{t('newsletter-title')}</h2>
						</div>
						<p className='app__newsletter__p'>{t('newsletter-subtitle')}</p>
						<div className='app__newsletter__form'>
							<input
								required
								type='email'
								id='news-email'
								name='news-email'
								placeholder={t('newsletter-email-placeholder')}
								className='app__newsletter__form__email'
							/>
							<button className='gold__button' type='submit'>
								{t('sub-btn')}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
