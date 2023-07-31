import '@styles/components/MenuItem.scss';

const MenuItem = ({ title, price, tags }) => {
	return (
		<div className='menu-item'>
			<div className='menu-item__top'>
				<h5 className='menu-item__top__title'>{title}</h5>
				<span className='menu-item__top__line'></span>
				<span className='menu-item__top__price'>{price}</span>
			</div>
			<div className='menu-item__bottom'>
				<div className='menu-item__bottom__tags'>
					{tags.map((tag, i) => (
						<span className='menu-tag' key={`tag-#${i}`}>
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default MenuItem;
