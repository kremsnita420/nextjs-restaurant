import '@styles/layout/AboutUs.scss';
import Image from 'next/image';
import { images } from '@constants';
import { SubHeading } from '@components';
import Link from 'next/link';
const AboutUs = () => (
	<section
		className='app-aboutus'
		style={{
			backgroundImage: `url(${images.bg.src})`,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'repeat',
			backgroundAttachment: 'fixed',
		}}
		id='about'>
		<div className='section__wrapper'>
			<div className='app-aboutus__left'>
				<SubHeading
					title='About us'
					align='flex-start'
					fontStyle='large_sub_heading'
				/>
				<p className='app-aboutus__left__p-text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
					adipiscing ultrices vulputate posuere tristique. In sed odio nec
					aliquet eu proin mauris et.
				</p>
				<Link href='/' type='button' className='gold__button'>
					read more
				</Link>
			</div>
			<div className='app-aboutus__middle'>
				<Image
					className='app-aboutus__middle__knife'
					src={images.knife}
					alt='Knife'
					as='image'
				/>
				<Image
					className='app-aboutus__middle__g'
					src={images.G}
					alt='Letter G'
					as='image'
				/>
			</div>
			<div className='app-aboutus__right'>
				<SubHeading
					title='History'
					align='flex-end'
					fontStyle='large_sub_heading'
				/>
				<p className='app-aboutus__right__p-text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
					adipiscing ultrices vulputate posuere tristique. In sed odio nec
					aliquet eu proin mauris et.
				</p>
				<Link href='/' type='button' className='gold__button'>
					Read menu
				</Link>
			</div>
		</div>
	</section>
);

export default AboutUs;
