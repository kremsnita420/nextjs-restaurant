import { SubHeading } from '@components';
import '@styles/components/Stats.scss';

const Stats = () => {
	return (
		<div className='stats-component'>
			<h3 className='stats_large'>Over the years</h3>
			<div className='stats-component__numbers'>
				<div>
					<SubHeading title='30+' align='flex-start' fontStyle='stats_large' />
					<p>Breakfast Options</p>
				</div>
				<div>
					<SubHeading title='50+' align='flex-start' fontStyle='stats_large' />
					<p>Dinner Options</p>
				</div>
				<div>
					<SubHeading title='8' align='flex-start' fontStyle='stats_large' />
					<p>New Locations</p>
				</div>
			</div>
		</div>
	);
};

export default Stats;
