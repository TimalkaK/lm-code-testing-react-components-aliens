import { useState } from 'react';
import W12MHeader from './W12MHeader';
import { SpeciesName } from './speciesName/speciesName';

const W12MForm = () => {

	const [speciesName, setSpeciesName] = useState('humans');


	return (
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesName speciesName={speciesName} onChangeSpeciesName={(value) => setSpeciesName(value)} />
		</section>
	);
};

export default W12MForm;
