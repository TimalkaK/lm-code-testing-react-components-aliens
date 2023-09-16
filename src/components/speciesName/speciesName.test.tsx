import { render, screen } from '@testing-library/react';
import { SpeciesName, SpeciesNameProps } from './speciesName';
import userEvent from '@testing-library/user-event';

test('renders species name label', () => {
	//arrange
	const requiredProps: SpeciesNameProps = {speciesName: 'humans', onChangeSpeciesName: () => {}}
	//act
	render(<SpeciesName {...requiredProps}/>)
	const speciesNameLabel = screen.getByLabelText('Species Name');
	//assert 
	expect(speciesNameLabel).toBeInTheDocument();
});

test('renders species name input box', () => {
	//arrange
	const requiredProps: SpeciesNameProps = {speciesName: 'humans', onChangeSpeciesName: () => {}}
	//act
	render(<SpeciesName {...requiredProps}/>)
	const speciesNameInputBox = screen.getAllByRole("textbox").find(t => t.id === 'speciesName');
	//assert 
	expect(speciesNameInputBox).toBeInTheDocument();
});

test('displays a species name input', () => {
	//arrange
	const requiredProps: SpeciesNameProps = {speciesName: 'dog', onChangeSpeciesName: () => {}}
	//act
	render(<SpeciesName {...requiredProps}/>)
	const speciesNameInput = screen.getByDisplayValue(requiredProps.speciesName);
	//assert 
	expect(speciesNameInput).toBeInTheDocument();
});

test('input field calls OnChangeSpeciesName function', async () => {
	//arrange
	const mockOnChange = jest.fn();
	const requiredProps: SpeciesNameProps = {speciesName: 'bird', onChangeSpeciesName: mockOnChange}
	//act
	render(<SpeciesName {...requiredProps}/>)

	const speciesNameInputBox = screen.getByRole("textbox");

	await userEvent.type(speciesNameInputBox, requiredProps.speciesName);
	
	//assert 
	expect(speciesNameInputBox).toHaveValue(requiredProps.speciesName);
	expect(mockOnChange).toHaveBeenCalled();
	//expect(mockOnChange).toHaveBeenCalledWith(requiredProps.speciesName);
});

test('input OnChangeSpeciesName has correct parameters', async () => {
	//arrange
	const mockOnChange = jest.fn();
	const requiredProps: SpeciesNameProps = {speciesName: 'reptile', onChangeSpeciesName: mockOnChange}
	//act
	render(<SpeciesName {...requiredProps}/>)

	const speciesNameInputBox = screen.getByRole("textbox");

	await userEvent.type(speciesNameInputBox, requiredProps.speciesName);
	
	//assert 
	expect(mockOnChange).toHaveBeenCalledWith(requiredProps.speciesName);
});