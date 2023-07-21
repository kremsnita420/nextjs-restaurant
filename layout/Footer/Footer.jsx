import '@styles/layout/Footer.scss';
import { images } from '@constants';
import { SubHeading } from '@components';
import Image from 'next/image';
import Link from 'next/link';
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi';
import { RxTwitterLogo } from 'react-icons/rx';
const Footer = () => (
	<section
		className='app-footer'
		style={{
			backgroundImage: `url(${images.bg.src})`,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'repeat',
			backgroundAttachment: 'fixed',
		}}>
		<div className='section__wrapper'>
			<div className='app-footer__top'>
				<div className='app-footer__contact'>
					<h4>Contact us</h4>
					<p>
						<span>9 W 53rd St, New York, NY 10019, USA</span>
						<span>+1 212-344-1230</span>
						<span> +1 212-555-1230</span>
					</p>
					<Link href='mailto:abc@example.com?subject=Feedback&body=Message'>
						<span>Send Email to </span>
						<span>abc@example.com</span>
					</Link>
				</div>
				<div className='app-footer__quote'>
					<div className='app-footer__logo'>
						<Image
							src={images.footerLogo}
							alt='Site logo'
							style={{
								maxWidth: '100%',
								height: 'auto',
							}}
							sizes='(max-width: 550px) 8rem, (max-width: 1200px) 10rem, 12rem'
						/>
					</div>
					<SubHeading
						align='center'
						fontStyle='footer_sub_heading'
						title='"The best way to find yourself is to lose yourself in the service of others."'
					/>
					<div className='app-footer__quote__social-icons'>
						<Link
							href='https://wwww.google.com'
							target='blank'
							rel='noopener noreferrer'>
							<BiLogoFacebook />
						</Link>
						<Link
							href='https://wwww.google.com'
							target='blank'
							rel='noopener noreferrer'>
							<RxTwitterLogo />
						</Link>
						<Link
							href='https://wwww.google.com'
							target='blank'
							rel='noopener noreferrer'>
							<BiLogoInstagram />
						</Link>
					</div>
				</div>
				<div className='app-footer__hours'>
					<h4>Working hours</h4>
					<p>
						<span>Monday - Friday</span>
						<span>10:00am - 20:00pm</span>
					</p>
					<p>
						<span>Saturday - Sunday</span>
						<span>10:00am - 22:00pm</span>
					</p>
				</div>
			</div>

			<div className='app-footer__bottom'>
				<div className='app-footer__legal'>
					{new Date().getFullYear()} Gerícht. All Rights reserved.
				</div>
			</div>
		</div>
	</section>
);

export default Footer;
