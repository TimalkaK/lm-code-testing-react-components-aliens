import { render, screen } from '@testing-library/react';
import W12MForm from '../W12MForm';

test('renders number of beings label', () => {
	render(<W12MForm/>);
	const whatIs2Plus2Label = screen.getByLabelText('What is 2 + 2?');
	expect(whatIs2Plus2Label).toBeInTheDocument();
});