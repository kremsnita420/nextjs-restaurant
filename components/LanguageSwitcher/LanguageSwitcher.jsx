import '@styles/components/LanguageSwitcher.scss';
import Link from 'next-intl/link';
import Image from 'next/image';
import { images } from '@constants';

const LanguageSwitcher = () => {
	return (
		<ul className='language-switcher'>
			<li>
				<Link href='/' locale='de'>
					<Image width={33} height={33} src={images.DE} alt='German' />
				</Link>
			</li>
			<li>
				<Link href='/' locale='en'>
					<Image width={33} height={33} src={images.UK} alt='English' />
				</Link>
			</li>
		</ul>
	);
};

export default LanguageSwitcher;
