import { render, screen } from '@testing-library/react';
import { WhatIs2Plus2, WhatIs2Plus2Props } from './whatIs2Plus2';
import userEvent from '@testing-library/user-event';

test('renders number of beings label', () => {
	//arrange
	const requiredProps: WhatIs2Plus2Props = {selectedValue: 'Not 4', onChangeSelectedValue: () => {}, validate: () => []}
	//act
	render(<WhatIs2Plus2 {...requiredProps}/>)
	const whatIs2Plus2Label = screen.getByLabelText('What is 2 + 2?');
	//assert 
	expect(whatIs2Plus2Label).toBeInTheDocument();
});

test('renders what is 2+2 input box', () => {
	//arrange
	const requiredProps: WhatIs2Plus2Props = {selectedValue: '4', onChangeSelectedValue: () => {}, validate: () => []}
	//act
	render(<WhatIs2Plus2 {...requiredProps}/>)
	const WhatIs2Plus2InputBox = screen.getAllByRole("combobox").find(c => c.id === 'whatIs2+2');
	//assert 
	
	expect(WhatIs2Plus2InputBox).toBeInTheDocument();
});


test('displays reason for sparing input', () => {
	//arrange
	const requiredProps: WhatIs2Plus2Props = {selectedValue: 'Not 4', onChangeSelectedValue: () => {}, validate: () => []}
	//act
	render(<WhatIs2Plus2 {...requiredProps}/>)
	const WhatIs2Plus2Input = screen.getByDisplayValue(requiredProps.selectedValue);
	//assert 
	expect(WhatIs2Plus2Input).toBeInTheDocument();
});

test('input field calls onChangeReasonForSparing function', async () => {
	//arrange
	const mockOnChange = jest.fn();
	const requiredProps: WhatIs2Plus2Props = {selectedValue: '4', onChangeSelectedValue: mockOnChange, validate: () => []}
	//act
	render(<WhatIs2Plus2 {...requiredProps}/>)

	const WhatIs2Plus2InputBox = screen.getByRole("combobox");

	await userEvent.selectOptions(WhatIs2Plus2InputBox, requiredProps.selectedValue);
	
	//assert 
	expect(WhatIs2Plus2InputBox).toHaveValue(requiredProps.selectedValue);
	expect(mockOnChange).toHaveBeenCalled();
});