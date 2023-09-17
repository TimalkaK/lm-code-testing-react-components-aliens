import { useState } from 'react';
import W12MHeader from './W12MHeader';
import { SpeciesName } from './speciesName/speciesName';
import { PlanetName } from './planetName/planetName';
import { NumberOfBeings } from './numberOfBeings/numberOfBeings';
import { WhatIs2Plus2 } from './whatIs2+2/whatIs2Plus2';
import { ReasonForSparing } from './reasonForSparing/reasonForSparing';
import { SubmitForm } from './submitForm/submitForm';
import { validateSpeciesName } from './validate/validate_species_name';
import { validatePlanetName } from './validate/validate_planet_name';
import { validateNumberOfBeings } from './validate/validate_number_of_beings';
import { validateWhatIs2Plus2 } from './validate/validate_what_is_2_plus_2';
import { validateReasonForSparing } from './validate/validate_reason_for_sparing';

const W12MForm = () => {

	const [speciesName, setSpeciesName] = useState('humans');
	const [planetName, setPlanetName] = useState('earth');
	const [numberOfBeings, setNumberOfBeings] = useState(7.8);
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
				<li><SpeciesName speciesName={speciesName} onChangeSpeciesName={(value) => setSpeciesName(value)} validate={validateSpeciesName}/></li>
				<li><PlanetName planetName={planetName} onChangePlanetName={(value) => setPlanetName(value)} validate={validatePlanetName}/></li>
				<li><NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={(value) => setNumberOfBeings(value)} validate={validateNumberOfBeings} /></li>
				<li><WhatIs2Plus2 selectedValue={selectedValue} onChangeSelectedValue={(value) => setSelectedValue(value)} validate={validateWhatIs2Plus2}/></li>
				<li><ReasonForSparing reasonForSparing={reasonForSparing} onChangeReasonForSparing={(value) => setReasonForSparing(value)} validate={validateReasonForSparing}/></li>
			</ul>
			<SubmitForm handleClick={handleClick}/>
		</section>
	);
};

export default W12MForm;
