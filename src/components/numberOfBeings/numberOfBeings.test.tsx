import { render, screen } from '@testing-library/react';
import { NumberOfBeings, NumberOfBeingsProps } from './numberOfBeings';

test('renders number of beings label', () => {
	//arrange
	const requiredProps: NumberOfBeingsProps = {numberOfBeings: '7.8 billion', onChangeNumberOfBeings: () => {}}
	//act
	render(<NumberOfBeings {...requiredProps}/>)
	//assert 
	const numberOfBeingsLabel = screen.getByLabelText('Number of beings');
	expect(numberOfBeingsLabel).toBeInTheDocument();
});

test('renders number of beings input box', () => {
	//arrange
	const requiredProps: NumberOfBeingsProps = {numberOfBeings: '7.8 billion', onChangeNumberOfBeings: () => {}}
	//act
	render(<NumberOfBeings {...requiredProps}/>)
	//assert 
	const NumberOfBeingsInputBox = screen.getByRole("textbox")
	expect(NumberOfBeingsInputBox).toBeInTheDocument();
});