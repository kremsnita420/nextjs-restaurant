import '@styles/components/ContactForm.scss';
import { useTranslations } from 'next-intl';

const ContactUs = () => {
	const t = useTranslations('contact-us');
	return (
		<div className='contact-form'>
			<form action='/send-data-here' method='post'>
				<input
					required
					type='text'
					id='first'
					name='first'
					placeholder={t('contact-us-name')}
				/>
				<input
					required
					type='email'
					id='last'
					name='last'
					placeholder={t('contact-us-email')}
				/>
				<textarea
					required
					name='text-area'
					id='text-area'
					cols='30'
					placeholder={`${t('contact-us-message')}...`}
					rows='10'
				/>
				<button className='gold__button' type='submit'>
					{t('submit-btn')}
				</button>
			</form>
		</div>
	);
};

export default ContactUs;
