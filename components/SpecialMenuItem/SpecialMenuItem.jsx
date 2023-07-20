import '@styles/components/SpecialMenuItem.scss';

const SpecialMenuItem = ({ title, price, tags }) => {
	return (
		<div className='special-menu-item'>
			<div className='special-menu-item__top'>
				<h5 className='special-menu-item__top__title'>{title}</h5>
				<span className='special-menu-item__top__line'></span>
				<span className='special-menu-item__top__price'>{price}</span>
			</div>
			<div className='special-menu-item__bottom'>
				<div className='special-menu-item__bottom__tags'>
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

export default SpecialMenuItem;
