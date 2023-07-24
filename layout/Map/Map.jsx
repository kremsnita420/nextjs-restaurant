'use client';
import { SubHeading } from '@components';
import '@styles/layout/Map.scss';

import 'leaflet/dist/leaflet.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
	const lat = 46.043809191289355;
	const lng = 14.580849753458784;
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		isMounted && (
			<section className='app__map'>
				<div className='section__wrapper'>
					<SubHeading
						title='Location'
						align='center'
						fontStyle='small_sub_heading'
					/>
					<div className='large_sub_heading'>
						<h2>You will find us at this location</h2>
					</div>
					<MapContainer
						center={[lat, lng]}
						zoom={14}
						style={{ height: '90vh' }}>
						<TileLayer
							attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
							url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
						/>
						{lat && lng && (
							<Marker position={[lat, lng]}>
								<Popup>
									Get directions with link below
									<br />
									<Link
										href='https://goo.gl/maps/3SNxCf1WybtvTrAe8'
										target='blank'
										rel='noopener noreferrer'>
										<strong>Open map</strong>
									</Link>
								</Popup>
							</Marker>
						)}
					</MapContainer>
				</div>
			</section>
		)
	);
};

export default Map;
