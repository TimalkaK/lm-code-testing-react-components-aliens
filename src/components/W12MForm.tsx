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
	const [selectedValue, setSelectedValue] = useState('Not 4');
	const [reasonForSparing, setReasonForSparing] = useState('We love our planet');

	const handleClick = () => {
		console.log (speciesName);
		console.log (planetName);
		console.log (numberOfBeings);
		console.log (selectedValue);
		console.log (reasonForSparing);
	}


	return (
		<section className='w12MForm'>
			<W12MHeader />
			<ul>
				<li><SpeciesName speciesName={speciesName} onChangeSpeciesName={(value) => setSpeciesName(value)} /></li>
				<li><PlanetName planetName={planetName} onChangePlanetName={(value) => setPlanetName(value)} /></li>
				<li><NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={(value) => setNumberOfBeings(value)} /></li>
				<li><WhatIs2Plus2 selectedValue={selectedValue} onChangeSelectedValue={(value) => setSelectedValue(value)}/></li>
				<li><ReasonForSparing reasonForSparing={reasonForSparing} onChangeReasonForSparing={(value) => setReasonForSparing(value)}/></li>
			</ul>
			<button onClick={handleClick}>Submit Form</button>
		</section>
	);
};

export default W12MForm;
