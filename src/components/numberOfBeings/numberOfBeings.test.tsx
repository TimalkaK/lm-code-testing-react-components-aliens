import { render, screen } from '@testing-library/react';
import W12MForm from '../W12MForm';

test('renders number of beings label', () => {
	render(<W12MForm/>);
	const numberOfBeingsLabel = screen.getByLabelText('Number of beings');
	expect(numberOfBeingsLabel).toBeInTheDocument();
});