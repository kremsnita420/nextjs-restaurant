import { images } from '@constants';
import '@styles/layout/HeaderSecondary.scss';
import { BiSolidChevronRight } from 'react-icons/bi';

function HeaderSecondary({ title, subtitle1, subtitle2 }) {
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
				<h1 className='app__hero-secondary__title'>{title}</h1>
				<p className='app__hero-secondary__subtitle'>
					<span>Home</span>
					<BiSolidChevronRight className='app__hero-secondary__subtitle__arrow' />
					<span>{subtitle1}</span>
				</p>
			</div>
		</div>
	);
}

export default HeaderSecondary;
