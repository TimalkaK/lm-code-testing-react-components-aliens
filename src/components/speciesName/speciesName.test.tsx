import { render, screen } from '@testing-library/react';
import W12MForm from '../W12MForm';

test('renders species name label', () => {
	render(<W12MForm/>);
	const speciesNameLabel = screen.getByLabelText('Species Name');
	expect(speciesNameLabel).toBeInTheDocument();
});