import { useState } from 'react';
import W12MHeader from './W12MHeader';
import { SpeciesName } from './speciesName/speciesName';
import { PlanetName } from './planetName/planetName';

const W12MForm = () => {

	const [speciesName, setSpeciesName] = useState('humans');
	const [planetName, setPlanetName] = useState('earth');


	return (
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesName speciesName={speciesName} onChangeSpeciesName={(value) => setSpeciesName(value)} />
			<PlanetName planetName={planetName} onChangePlanetName={(value) => setPlanetName(value)} />
		</section>
	);
};

export default W12MForm;
