import '@styles/layout/Chef.scss';
import { images } from '@constants';
import Image from 'next/image';
import { SubHeading } from '@components';

const Chef = () => (
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
					title="Chef's word"
					align='flex-start'
					fontStyle='small_sub_heading'
				/>
				<div className='large_sub_heading'>
					<h2>What we believe in</h2>
				</div>
				<p className='app-chef__desc__quote'>
					<Image src={images.quote} placeholder='blur' alt='Quote' />
					auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
					Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
					lectus eu. Congue iaculis integer curabitur semper sit nunc.
				</p>
				<p className='app-chef__desc__chef'>
					<span className='app-chef__desc__chef__name'>Kevin Smith</span>
					<span className='app-chef__desc__chef__title'>Main chef</span>
				</p>
			</div>
		</div>
	</section>
);

export default Chef;
