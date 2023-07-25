/* eslint-disable react-hooks/rules-of-hooks */

import Link from 'next/link';
import { languages } from '@app/i18n/settings';
export const LanguageSwitcher = () => {
	return (
		<div>
			{languages.map((l, index) => {
				return (
					<span key={l}>
						{index > 0 && ' / '}
						<Link href={`/${l}`}>{l}</Link>
					</span>
				);
			})}
		</div>
	);
};
