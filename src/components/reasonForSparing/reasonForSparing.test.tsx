import { render, screen } from '@testing-library/react';
import { ReasonForSparing, ReasonForSparingProps } from './reasonForSparing';

test('renders number of beings label', () => {
	//arrange
	const requiredProps: ReasonForSparingProps = {reasonForSparing: 'We love earth', onChangeReasonForSparing: () => {}}
	//act
	render(<ReasonForSparing {...requiredProps}/>)
	//assert 
	const reasonForSparingLabel = screen.getByLabelText('Reason for sparing');
	expect(reasonForSparingLabel).toBeInTheDocument();
});


test('renders reason for sparing input box', () => {
	//arrange
	const requiredProps: ReasonForSparingProps = {reasonForSparing: 'We love earth', onChangeReasonForSparing: () => {}}
	//act
	render(<ReasonForSparing {...requiredProps}/>)
	//assert 
	const reasonForSparingInputBox = screen.getByRole("textbox")
	expect(reasonForSparingInputBox).toBeInTheDocument();
});