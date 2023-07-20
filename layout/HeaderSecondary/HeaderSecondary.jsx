'use client';
import { images } from '@constants';
import '@styles/layout/HeaderSecondary.scss';
import Link from 'next/link';
import { BiSolidChevronRight } from 'react-icons/bi';
import { usePathname } from 'next/navigation';
function HeaderSecondary() {
	const pathname = usePathname();
	const path = pathname.replace('/', '').replace('-', ' ');
	return (
		<div
			className='app__hero-secondary'
			style={{
				backgroundImage: `url(${images.tablesLamps.src})`,
				backgroundPosition: 'top',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}>
			<div className='section__wrapper'>
				<h1 className='app__hero-secondary__title'>{path}</h1>
				<p className='app__hero-secondary__subtitle'>
					<Link href='/'>Home</Link>
					<BiSolidChevronRight className='app__hero-secondary__subtitle__arrow' />
					<span>{path}</span>
				</p>
			</div>
		</div>
	);
}

export default HeaderSecondary;
