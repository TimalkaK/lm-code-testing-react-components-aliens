import { render, screen } from '@testing-library/react';
import { ReasonForSparing, ReasonForSparingProps } from './reasonForSparing';
import userEvent from '@testing-library/user-event';

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
	const reasonForSparingInputBox = screen.getAllByRole("textbox").find(t => t.id === 'reasonForSparing');
	expect(reasonForSparingInputBox).toBeInTheDocument();
});

test('displays reason for sparing input', () => {
	//arrange
	const requiredProps: ReasonForSparingProps = {reasonForSparing: 'Mars is beautiful', onChangeReasonForSparing: () => {}}
	//act
	render(<ReasonForSparing {...requiredProps}/>)
	const reasonForSparingInput = screen.getByDisplayValue(requiredProps.reasonForSparing);
	//assert 
	expect(reasonForSparingInput).toBeInTheDocument();
});

test('input field calls onChangeReasonForSparing function', async () => {
	//arrange
	const mockOnChange = jest.fn();
	const requiredProps: ReasonForSparingProps = {reasonForSparing: 'Our souls will be destroyed', onChangeReasonForSparing: mockOnChange}
	//act
	render(<ReasonForSparing {...requiredProps}/>)

	const reasonForSparingInputBox = screen.getByRole("textbox");

	await userEvent.type(reasonForSparingInputBox, requiredProps.reasonForSparing);
	
	//assert 
	expect(reasonForSparingInputBox).toHaveValue(requiredProps.reasonForSparing);
	expect(mockOnChange).toHaveBeenCalled();
});