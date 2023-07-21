import '@styles/components/ContactForm.scss';

const ContactForm = () => {
	return (
		<div className='contact-form'>
			<form action='/send-data-here' method='post'>
				<input
					required
					type='text'
					id='first'
					name='first'
					placeholder='Name'
				/>
				<input required type='text' id='last' name='last' placeholder='Email' />
				<textarea
					required
					name='text-area'
					id='text-area'
					cols='30'
					placeholder='Message'
					rows='10'
				/>
				<button className='gold__button' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
