import { render, screen } from '@testing-library/react';
import { PlanetName, PlanetNameProps } from './planetName';
import userEvent from '@testing-library/user-event';

test('renders planet name label', () => {
	//arrange
	const requiredProps: PlanetNameProps = {planetName: 'earth', onChangePlanetName: () => {}, validate: () => []}
	//act
	render(<PlanetName {...requiredProps}/>)
	//assert 
	const planetNameLabel = screen.getByLabelText('Planet Name');
	expect(planetNameLabel).toBeInTheDocument();
});

test('renders planet name input box', () => {
	//arrange
	const requiredProps: PlanetNameProps = {planetName: 'earth', onChangePlanetName: () => {}, validate: () => []}
	//act
	render(<PlanetName {...requiredProps}/>)
	//assert 
	const planetNameInputBox = screen.getAllByRole("textbox").find(t => t.id === 'planetName');
	expect(planetNameInputBox).toBeInTheDocument();
});

test('displays a planet name input', () => {
	//arrange
	const requiredProps: PlanetNameProps = {planetName: 'earth', onChangePlanetName: () => {}, validate: () => []}
	//act
	render(<PlanetName {...requiredProps}/>)
	const planetNameInput = screen.getByDisplayValue(requiredProps.planetName);
	//assert 
	expect(planetNameInput).toBeInTheDocument();
});

test('input field calls OnChangePlanetName function', async () => {
	//arrange
	const mockOnChange = jest.fn();
	const requiredProps: PlanetNameProps = {planetName: 'mars', onChangePlanetName: mockOnChange, validate: () => []}
	//act
	render(<PlanetName {...requiredProps}/>)

	const planetNameInputBox = screen.getByRole("textbox");

	await userEvent.type(planetNameInputBox, requiredProps.planetName);
	
	//assert 
	expect(planetNameInputBox).toHaveValue(requiredProps.planetName);
	expect(mockOnChange).toHaveBeenCalled();
});




test('validation function is called', async () => {
	//arrange
	const mockValidatePlanetName = jest.fn();
	const requiredProps: PlanetNameProps = {planetName: 'mars', onChangePlanetName: () => {}, validate: mockValidatePlanetName}
	//act
	render(<PlanetName {...requiredProps}/>)

	const planetNameInputBox = screen.getByRole("textbox");

	await userEvent.type(planetNameInputBox, requiredProps.planetName);
	
	//assert 
	expect(mockValidatePlanetName).toHaveBeenCalledTimes(1);
});

test('validation function returns no error messages', () => {
	//arrange
	const mockValidatePlanetName = jest.fn();
	//mock is returning this 
	mockValidatePlanetName.mockReturnValue([]);
	const requiredProps: PlanetNameProps = {planetName: 'mars', onChangePlanetName: () => {}, validate: mockValidatePlanetName}
	//act
	render(<PlanetName {...requiredProps}/>)

	const planetNameErrorMessage = screen.queryByText("Must be between 2 and 49 characters. Numbers are allowed, but no special characters.");
	
	//assert 
	expect(planetNameErrorMessage).not.toBeInTheDocument();
});

describe('validation function returns error messages', () => {
	test('characters are under 2', () => {
		//arrange
		const mockValidatePlanetName = jest.fn();
		//mock is returning this
		mockValidatePlanetName.mockReturnValue(["Must be between 2 and 49 characters. Numbers are allowed, but no special characters."]);
		const requiredProps: PlanetNameProps = {planetName: 'm', onChangePlanetName: () => {}, validate: mockValidatePlanetName}
		//act
		render(<PlanetName {...requiredProps}/>)
	
		const planetNameErrorMessage = screen.queryByText("Must be between 2 and 49 characters. Numbers are allowed, but no special characters.");
		
		//assert 
		expect(planetNameErrorMessage).toBeInTheDocument();
	});

	test('characters are over 49', () => {
		//arrange
		const mockValidatePlanetName = jest.fn();
		//mock is returning this
		mockValidatePlanetName.mockReturnValue(["Must be between 2 and 49 characters. Numbers are allowed, but no special characters."]);
		const requiredProps: PlanetNameProps = {planetName: 'ApesWhoLoveToBaskInTheSunAndHaveFunInTheLushGreenGrass', onChangePlanetName: () => {}, validate: mockValidatePlanetName}
		//act
		render(<PlanetName {...requiredProps}/>)
	
		const planetNameErrorMessage = screen.queryByText("Must be between 2 and 49 characters. Numbers are allowed, but no special characters.");
		
		//assert 
		expect(planetNameErrorMessage).toBeInTheDocument();
	});

	test('planet name contains characters', () => {
		//arrange
		const mockValidatePlanetName = jest.fn();
		//mock is returning this
		mockValidatePlanetName.mockReturnValue(["Must be between 2 and 49 characters. Numbers are allowed, but no special characters."]);
		const requiredProps: PlanetNameProps = {planetName: 'm@{}', onChangePlanetName: () => {}, validate: mockValidatePlanetName}
		//act
		render(<PlanetName {...requiredProps}/>)
	
		const planetNameErrorMessage = screen.queryByText("Must be between 2 and 49 characters. Numbers are allowed, but no special characters.");
		
		//assert 
		expect(planetNameErrorMessage).toBeInTheDocument();
	});
	
	});