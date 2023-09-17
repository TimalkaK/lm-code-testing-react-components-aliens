import { render, screen } from '@testing-library/react';
import { NumberOfBeings, NumberOfBeingsProps } from './numberOfBeings';
import userEvent from '@testing-library/user-event';

test('renders number of beings label', () => {
	//arrange
	const requiredProps: NumberOfBeingsProps = {numberOfBeings: 7.8 , onChangeNumberOfBeings: () => {}}
	//act
	render(<NumberOfBeings {...requiredProps}/>)
	//assert 
	const numberOfBeingsLabel = screen.getByLabelText('Number of beings');
	expect(numberOfBeingsLabel).toBeInTheDocument();
});

test('renders number of beings input box', () => {
	//arrange
	const requiredProps: NumberOfBeingsProps = {numberOfBeings: 7.8, onChangeNumberOfBeings: () => {}}
	//act
	render(<NumberOfBeings {...requiredProps}/>)
	const NumberOfBeingsInputBox = screen.getAllByRole("textbox").find(t => t.id === 'numberofBeings');
	//assert 
	expect(NumberOfBeingsInputBox).toBeInTheDocument();
});

test('displays number of beings input', () => {
	//arrange
	const requiredProps: NumberOfBeingsProps = {numberOfBeings: 3.3, onChangeNumberOfBeings: () => {}}
	//act
	render(<NumberOfBeings {...requiredProps}/>)
	const planetNameInput = screen.getByDisplayValue(requiredProps.numberOfBeings);
	//assert 
	expect(planetNameInput).toBeInTheDocument();
});

test('input field calls onChangeNumberOfBeings function', async () => {
	//arrange
	const mockOnChange = jest.fn();
	const requiredProps: NumberOfBeingsProps = {numberOfBeings: 5.5, onChangeNumberOfBeings: mockOnChange}
	//act
	render(<NumberOfBeings {...requiredProps}/>)

	const planetNameInputBox = screen.getByRole("textbox");

	await userEvent.type(planetNameInputBox, requiredProps.numberOfBeings.toString());
	
	//assert 
	expect(planetNameInputBox).toHaveValue(requiredProps.numberOfBeings);
	expect(mockOnChange).toHaveBeenCalled();
});