import { render, screen } from '@testing-library/react';
import W12MForm from '../W12MForm';

test('renders number of beings label', () => {
	render(<W12MForm/>);
	const reasonForSparingLabel = screen.getByLabelText('Reason for sparing');
	expect(reasonForSparingLabel).toBeInTheDocument();
});