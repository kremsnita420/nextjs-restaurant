import '@styles/base/page.scss';
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
	const mainDishes = await getMainDishes();
	const mainDishesTitle = mainDishes[0]?.title;
	const mainDishesList = mainDishes[0]?.mainDishesList;
	// Pizzas
	const pizzas = await getPizzas();
	const pizzasTitle = pizzas[0]?.title;
	const pizzasList = pizzas[0]?.pizzaList;

	// Salads
	const salads = await getSalads();
	const saladsTitle = salads[0]?.title;
	const saladsList = salads[0]?.saladsList;

	// Desserts
	const desserts = await getDesserts();
	const dessertsTitle = desserts[0]?.title;
	const dessertsList = desserts[0]?.dessertsList;

	// Alcoholic drinks
	const alcoholDrinks = await getAlcoholDrinks(locale);
	const alcoholDrinksTitle = alcoholDrinks?.title;
	const alcoholDrinksList = alcoholDrinks?.alcoholDrinksList;
	console.log('title: ', alcoholDrinks);
	console.log(locale);
	// Alcoholic free drinks
	const alcoholFreeDrinks = await getAlcoholFreeDrinks();
	const alcoholFreeDrinksTitle = alcoholFreeDrinks[0]?.title;
	const alcoholFreeDrinksList = alcoholFreeDrinks[0]?.alcoholFreeDrinksList;

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

async function getMainDishes() {
	const query = `*[_type == "mainDishes"]`;
	const data = await client.fetch(query);
	return data;
}

async function getPizzas() {
	const query = `*[_type == "pizzas"]`;
	const data = await client.fetch(query);
	return data;
}

async function getSalads() {
	const query = `*[_type == "salads"]`;
	const data = await client.fetch(query);
	return data;
}

async function getDesserts() {
	const query = `*[_type == "desserts"]`;
	const data = await client.fetch(query);
	return data;
}

async function getAlcoholDrinks(locale) {
	const query = `*[_type == "alcoholDrinks" && language == "${locale}"][0]`;
	const data = await client.fetch(query);
	return data;
}

async function getAlcoholFreeDrinks() {
	const query = `*[_type == "alcoholFreeDrinks"]`;
	const data = await client.fetch(query);
	return data;
}
