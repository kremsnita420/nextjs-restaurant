import '@styles/layout/SpecialMenu.scss';
import { MenuSection, SubHeading } from '@components';
import { images } from '@constants';
import Link from 'next/link';
import Image from 'next/image';
import { MenuItem } from '@components';
import { getTranslator } from 'next-intl/server';
import { client } from '@lib/sanity';
export default async function SpecialMenu({ locale }) {
	const t = await getTranslator(locale, 'special-menu');

	const promotedPizzas = await getPromotedPizzas(locale);
	const promotedPizzasList = promotedPizzas.pizzaList;
	const pizzasList = promotedPizzasList?.filter((item) => {
		return item.promoteToFront === true;
	});

	const promotedMainDishes = await getPromotedMainDishes(locale);
	const promotedMainDishesList = promotedMainDishes.mainDishesList;
	const mainDishesList = promotedMainDishesList?.filter((item) => {
		return item.promoteToFront === true;
	});

	const promotedSalads = await getPromotedSalads(locale);
	const promotedSaladsList = promotedSalads.saladsList;
	const saladsList = promotedSaladsList?.filter((item) => {
		return item.promoteToFront === true;
	});

	const promotedDesserts = await getPromotedDesserts(locale);
	const promotedDessertsList = promotedDesserts.dessertsList;
	const dessertsList = promotedDessertsList?.filter((item) => {
		return item.promoteToFront === true;
	});

	const promotedAlcoholDrinks = await getPromotedAlcoholDrinks(locale);
	const promotedAlcoholDrinksList = promotedAlcoholDrinks.alcoholDrinksList;
	const alcoholDrinksList = promotedAlcoholDrinksList?.filter((item) => {
		return item.promoteToFront === true;
	});

	const promotedAlcoholFreeDrinks = await getPromotedAlcoholFreeDrinks(locale);
	const promotedAlcoholFreeDrinksList =
		promotedAlcoholFreeDrinks.alcoholFreeDrinksList;
	const alcoholFreeDrinksList = promotedAlcoholFreeDrinksList?.filter(
		(item) => {
			return item.promoteToFront === true;
		}
	);

	return (
		<section className='app-special-menu' id='menu'>
			<div className='section__wrapper'>
				<SubHeading
					title={t('special-menu-subheading')}
					align='center'
					fontStyle='small_sub_heading'
				/>
				<div className='large_sub_heading'>
					<h2>{t('special-menu-title')}</h2>
				</div>
				<div className='app-special-menu__wrapper'>
					<div className='app-special-menu__wrapper__left'>
						<MenuSection menuData={pizzasList} title={promotedPizzas.title} />
						<MenuSection
							menuData={mainDishesList}
							title={promotedMainDishes.title}
						/>
						<MenuSection menuData={saladsList} title={promotedSalads.title} />
					</div>
					<div className='app-special-menu__wrapper__middle'>
						<Image
							className='app-aboutus__middle__knife'
							src={images.menu}
							alt={t('special-menu-image-alt')}
							as='image'
							placeholder='blur'
							loading='lazy'
						/>
					</div>
					<div className='app-special-menu__wrapper__right'>
						<MenuSection
							menuData={dessertsList}
							title={promotedDesserts.title}
						/>
						<MenuSection
							menuData={alcoholDrinksList}
							title={promotedAlcoholDrinks.title}
						/>
						<MenuSection
							menuData={alcoholFreeDrinksList}
							title={promotedAlcoholFreeDrinks.title}
						/>
					</div>
				</div>

				<Link href='/menu' type='button' className='gold__button'>
					{t('view-more')}
				</Link>
			</div>
		</section>
	);
}

async function getPromotedPizzas(locale) {
	const query = `*[_type == "pizzas" && language == "${locale}" ][0]`;
	const data = await client.fetch(query);
	return data;
}

async function getPromotedMainDishes(locale) {
	const query = `*[_type == "mainDishes" && language == "${locale}" ][0]`;
	const data = await client.fetch(query);
	return data;
}

async function getPromotedSalads(locale) {
	const query = `*[_type == "salads" && language == "${locale}" ][0]`;
	const data = await client.fetch(query);
	return data;
}

async function getPromotedAlcoholDrinks(locale) {
	const query = `*[_type == "alcoholDrinks" && language == "${locale}" ][0]`;
	const data = await client.fetch(query);
	return data;
}

async function getPromotedAlcoholFreeDrinks(locale) {
	const query = `*[_type == "alcoholFreeDrinks" && language == "${locale}" ][0]`;
	const data = await client.fetch(query);
	return data;
}

async function getPromotedDesserts(locale) {
	const query = `*[_type == "desserts" && language == "${locale}"][0]`;
	const data = await client.fetch(query);
	return data;
}
