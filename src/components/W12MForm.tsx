import { useState } from 'react';
import W12MHeader from './W12MHeader';
import { SpeciesName } from './speciesName/speciesName';
import { PlanetName } from './planetName/planetName';
import { NumberOfBeings } from './numberOfBeings/numberOfBeings';
import { WhatIs2Plus2 } from './whatIs2+2/whatIs2Plus2';
import { ReasonForSparing } from './reasonForSparing/reasonForSparing';

const W12MForm = () => {

	const [speciesName, setSpeciesName] = useState('humans');
	const [planetName, setPlanetName] = useState('earth');
	const [numberOfBeings, setNumberOfBeings] = useState('7.8 billion');
	const [selectedValue, setSelectedValue] = useState('');
	const [reasonForSparing, setReasonForSparing] = useState('');


	return (
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesName speciesName={speciesName} onChangeSpeciesName={(value) => setSpeciesName(value)} />
			<PlanetName planetName={planetName} onChangePlanetName={(value) => setPlanetName(value)} />
			<NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={(value) => setNumberOfBeings(value)} />
			<WhatIs2Plus2 selectedValue={selectedValue} onChangeSelectedValue={(value) => setSelectedValue(value)}/>
			<ReasonForSparing reasonForSparing={reasonForSparing} onChangeReasonForSparing={(value) => setReasonForSparing(value)}/>
		</section>
	);
};

export default W12MForm;
