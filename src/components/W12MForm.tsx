import { useState } from 'react';
import W12MHeader from './W12MHeader';
import { SpeciesName } from './speciesName/speciesName';
import { PlanetName } from './planetName/planetName';
import { NumberOfBeings } from './numberOfBeings/numberOfBeings';

const W12MForm = () => {

	const [speciesName, setSpeciesName] = useState('humans');
	const [planetName, setPlanetName] = useState('earth');
	const [numberOfBeings, setNumberOfBeings] = useState('7.8 billion');


	return (
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesName speciesName={speciesName} onChangeSpeciesName={(value) => setSpeciesName(value)} />
			<PlanetName planetName={planetName} onChangePlanetName={(value) => setPlanetName(value)} />
			<NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={(value) => setNumberOfBeings(value)} />
		</section>
	);
};

export default W12MForm;
