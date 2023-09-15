import { render, screen } from '@testing-library/react';
import W12MForm from '../W12MForm';

test('renders planet name label', () => {
	render(<W12MForm/>);
	const planetNameLabel = screen.getByLabelText('Planet Name');
	expect(planetNameLabel).toBeInTheDocument();
});