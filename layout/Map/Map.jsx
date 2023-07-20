'use client';
import '@styles/layout/Map.scss';
import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Map() {
	const lat = 46.043809191289355;
	const lng = 14.580849753458784;

	return (
		<section className='section__wrapper'>
			<MapContainer center={[lat, lng]} zoom={14} style={{ height: '90vh' }}>
				<TileLayer
					attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
					url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
				/>
				{lat && lng && (
					<Marker position={[lat, lng]}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				)}
			</MapContainer>
		</section>
	);
}
