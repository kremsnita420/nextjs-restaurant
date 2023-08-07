import '@styles/layout/menu-page.scss';
import Footer from '@layout/Footer/Footer';
import HeaderSecondary from '@layout/HeaderSecondary/HeaderSecondary';
import { getTranslator } from 'next-intl/server';

import { MenuSection } from '@components';
export const revalidate = 60; // revalidate this page every 60 seconds
import { client } from '@lib/sanity';

export async function generateMetadata({ params: { locale } }) {
	const t = await getTranslator(locale, 'menu');

	return {
		title: t('title'),
		description: t('description'),
	};
}

export default async function AboutPage({ params: { locale } }) {
	const t = await getTranslator(locale, 'header-secondary');
	// const t = useTranslations('header-secondary');
	// Main dishes
	const mainDishes = await getMainDishes(locale);
	const mainDishesTitle = mainDishes?.title;
	const mainDishesList = mainDishes?.mainDishesList;
	// Pizzas
	const pizzas = await getPizzas(locale);
	const pizzasTitle = pizzas?.title;
	const pizzasList = pizzas?.pizzaList;

	// Salads
	const salads = await getSalads(locale);
	const saladsTitle = salads?.title;
	const saladsList = salads?.saladsList;

	// Desserts
	const desserts = await getDesserts(locale);
	const dessertsTitle = desserts?.title;
	const dessertsList = desserts?.dessertsList;

	// Alcoholic drinks
	const alcoholDrinks = await getAlcoholDrinks(locale);
	const alcoholDrinksTitle = alcoholDrinks?.title;
	const alcoholDrinksList = alcoholDrinks?.alcoholDrinksList;

	// Alcoholic free drinks
	const alcoholFreeDrinks = await getAlcoholFreeDrinks(locale);
	const alcoholFreeDrinksTitle = alcoholFreeDrinks?.title;
	const alcoholFreeDrinksList = alcoholFreeDrinks?.alcoholFreeDrinksList;

	return (
		<>
			<HeaderSecondary
				homeLink={t('home-link')}
				title={t('menu-title')}
				path={t('menu-path')}
			/>
			<section className='app__menu-page'>
				<div className='section__wrapper'>
					<MenuSection menuData={mainDishesList} title={mainDishesTitle} />
					<MenuSection menuData={pizzasList} title={pizzasTitle} />
					<MenuSection menuData={saladsList} title={saladsTitle} />
					<MenuSection menuData={dessertsList} title={dessertsTitle} />
					<MenuSection
						menuData={alcoholDrinksList}
						title={alcoholDrinksTitle}
					/>
					<MenuSection
						menuData={alcoholFreeDrinksList}
						title={alcoholFreeDrinksTitle}
					/>
				</div>
			</section>
			<Footer />
		</>
	);
}

async function getMainDishes(locale) {
	const query = `*[_type == "mainDishes" && language == "${locale}"][0]`;
	const data = await client.fetch(query);
	return data;
}

async function getPizzas(locale) {
	const query = `*[_type == "pizzas" && language == "${locale}"][0]`;
	const data = await client.fetch(query);
	return data;
}

async function getSalads(locale) {
	const query = `*[_type == "salads" && language == "${locale}"][0]`;
	const data = await client.fetch(query);
	return data;
}

async function getDesserts(locale) {
	const query = `*[_type == "desserts" && language == "${locale}"][0]`;
	const data = await client.fetch(query);
	return data;
}

async function getAlcoholDrinks(locale) {
	const query = `*[_type == "alcoholDrinks" && language == "${locale}"][0]`;
	const data = await client.fetch(query);
	return data;
}

async function getAlcoholFreeDrinks(locale) {
	const query = `*[_type == "alcoholFreeDrinks" && language == "${locale}"][0]`;
	const data = await client.fetch(query);
	return data;
}
