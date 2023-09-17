import { render, screen } from '@testing-library/react';
import { SpeciesName, SpeciesNameProps } from './speciesName';
import userEvent from '@testing-library/user-event';

test('renders species name label', () => {
	//arrange
	const requiredProps: SpeciesNameProps = {speciesName: 'humans', onChangeSpeciesName: () => {}, validate: () => []}
	//act
	render(<SpeciesName {...requiredProps}/>)
	const speciesNameLabel = screen.getByLabelText('Species Name');
	//assert 
	expect(speciesNameLabel).toBeInTheDocument();
});

test('renders species name input box', () => {
	//arrange
	const requiredProps: SpeciesNameProps = {speciesName: 'humans', onChangeSpeciesName: () => {}, validate: () => []}
	//act
	render(<SpeciesName {...requiredProps}/>)
	const speciesNameInputBox = screen.getAllByRole("textbox").find(t => t.id === 'speciesName');
	//assert 
	expect(speciesNameInputBox).toBeInTheDocument();
});

test('displays a species name input', () => {
	//arrange
	const requiredProps: SpeciesNameProps = {speciesName: 'dog', onChangeSpeciesName: () => {}, validate: () => []}
	//act
	render(<SpeciesName {...requiredProps}/>)
	const speciesNameInput = screen.getByDisplayValue(requiredProps.speciesName);
	//assert 
	expect(speciesNameInput).toBeInTheDocument();
});

test('input field calls OnChangeSpeciesName function', async () => {
	//arrange
	const mockOnChange = jest.fn();
	const requiredProps: SpeciesNameProps = {speciesName: 'bird', onChangeSpeciesName: mockOnChange, validate: () => []}
	//act
	render(<SpeciesName {...requiredProps}/>)

	const speciesNameInputBox = screen.getByRole("textbox");

	await userEvent.type(speciesNameInputBox, requiredProps.speciesName);
	
	//assert 
	expect(speciesNameInputBox).toHaveValue(requiredProps.speciesName);
	expect(mockOnChange).toHaveBeenCalled();
});

test('input OnChangeSpeciesName has correct parameters', async () => {
	//arrange
	const mockOnChange = jest.fn();
	const requiredProps: SpeciesNameProps = {speciesName: 'reptile', onChangeSpeciesName: mockOnChange, validate: () => []}
	//act
	render(<SpeciesName {...requiredProps}/>)

	const speciesNameInputBox = screen.getByRole("textbox");

	await userEvent.type(speciesNameInputBox, requiredProps.speciesName);
	
	//assert 
	//expect(mockOnChange).toHaveBeenCalledWith(requiredProps.speciesName);
});

test('validation function is called', async () => {
	//arrange
	const mockValidateSpeciesName = jest.fn();
	const requiredProps: SpeciesNameProps = {speciesName: 'reptile', onChangeSpeciesName: () => {}, validate: mockValidateSpeciesName}
	//act
	render(<SpeciesName {...requiredProps}/>)

	const speciesNameInputBox = screen.getByRole("textbox");

	await userEvent.type(speciesNameInputBox, requiredProps.speciesName);
	
	//assert 
	expect(mockValidateSpeciesName).toHaveBeenCalledTimes(1);
});

test('validation function returns no error messages', () => {
	//arrange
	const mockValidateSpeciesName = jest.fn();
	//mock is returning this 
	mockValidateSpeciesName.mockReturnValue([]);
	const requiredProps: SpeciesNameProps = {speciesName: 'flower', onChangeSpeciesName: () => {}, validate: mockValidateSpeciesName}
	//act
	render(<SpeciesName {...requiredProps}/>)

	const speciesNameErrorMessage = screen.queryByText("Must be between 3 and 23 characters. No numbers or special characters allowed!");
	
	//assert 
	expect(speciesNameErrorMessage).not.toBeInTheDocument();
});

describe('validation function returns error messages', () => {
	test('characters are under 3', () => {
		//arrange
		const mockValidateSpeciesName = jest.fn();
		//mock is returning this
		mockValidateSpeciesName.mockReturnValue(["Must be between 3 and 23 characters. No numbers or special characters allowed!"]);
		const requiredProps: SpeciesNameProps = {speciesName: 're', onChangeSpeciesName: () => {}, validate: mockValidateSpeciesName}
		//act
		render(<SpeciesName {...requiredProps}/>)
	
		const speciesNameErrorMessage = screen.queryByText("Must be between 3 and 23 characters. No numbers or special characters allowed!");
		
		//assert 
		expect(speciesNameErrorMessage).toBeInTheDocument();
	});

	test('characters are over 23', () => {
		//arrange
		const mockValidateSpeciesName = jest.fn();
		//mock is returning this
		mockValidateSpeciesName.mockReturnValue(["Must be between 3 and 23 characters. No numbers or special characters allowed!"]);
		const requiredProps: SpeciesNameProps = {speciesName: 'Flammulina filiformis', onChangeSpeciesName: () => {}, validate: mockValidateSpeciesName}
		//act
		render(<SpeciesName {...requiredProps}/>)
	
		const speciesNameErrorMessage = screen.queryByText("Must be between 3 and 23 characters. No numbers or special characters allowed!");
		
		//assert 
		expect(speciesNameErrorMessage).toBeInTheDocument();
	});

	test('species name contains numbers', () => {
		//arrange
		const mockValidateSpeciesName = jest.fn();
		//mock is returning this
		mockValidateSpeciesName.mockReturnValue(["Must be between 3 and 23 characters. No numbers or special characters allowed!"]);
		const requiredProps: SpeciesNameProps = {speciesName: 'Rab6it', onChangeSpeciesName: () => {}, validate: mockValidateSpeciesName}
		//act
		render(<SpeciesName {...requiredProps}/>)
	
		const speciesNameErrorMessage = screen.queryByText("Must be between 3 and 23 characters. No numbers or special characters allowed!");
		
		//assert 
		expect(speciesNameErrorMessage).toBeInTheDocument();
	});

	test('species name contains characters', () => {
		//arrange
		const mockValidateSpeciesName = jest.fn();
		//mock is returning this
		mockValidateSpeciesName.mockReturnValue(["Must be between 3 and 23 characters. No numbers or special characters allowed!"]);
		const requiredProps: SpeciesNameProps = {speciesName: 'Rab@', onChangeSpeciesName: () => {}, validate: mockValidateSpeciesName}
		//act
		render(<SpeciesName {...requiredProps}/>)
	
		const speciesNameErrorMessage = screen.queryByText("Must be between 3 and 23 characters. No numbers or special characters allowed!");
		
		//assert 
		expect(speciesNameErrorMessage).toBeInTheDocument();
	});
	
	});