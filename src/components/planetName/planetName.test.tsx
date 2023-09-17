import { render, screen } from '@testing-library/react';
import { PlanetName, PlanetNameProps } from './planetName';
import userEvent from '@testing-library/user-event';

test('renders planet name label', () => {
	//arrange
	const requiredProps: PlanetNameProps = {planetName: 'earth', onChangePlanetName: () => {}}
	//act
	render(<PlanetName {...requiredProps}/>)
	//assert 
	const planetNameLabel = screen.getByLabelText('Planet Name');
	expect(planetNameLabel).toBeInTheDocument();
});

test('renders planet name input box', () => {
	//arrange
	const requiredProps: PlanetNameProps = {planetName: 'earth', onChangePlanetName: () => {}}
	//act
	render(<PlanetName {...requiredProps}/>)
	//assert 
	const planetNameInputBox = screen.getAllByRole("textbox").find(t => t.id === 'planetName');
	expect(planetNameInputBox).toBeInTheDocument();
});

test('displays a planet name input', () => {
	//arrange
	const requiredProps: PlanetNameProps = {planetName: 'earth', onChangePlanetName: () => {}}
	//act
	render(<PlanetName {...requiredProps}/>)
	const planetNameInput = screen.getByDisplayValue(requiredProps.planetName);
	//assert 
	expect(planetNameInput).toBeInTheDocument();
});

test('input field calls OnChangePlanetName function', async () => {
	//arrange
	const mockOnChange = jest.fn();
	const requiredProps: PlanetNameProps = {planetName: 'mars', onChangePlanetName: mockOnChange}
	//act
	render(<PlanetName {...requiredProps}/>)

	const planetNameInputBox = screen.getByRole("textbox");

	await userEvent.type(planetNameInputBox, requiredProps.planetName);
	
	//assert 
	expect(planetNameInputBox).toHaveValue(requiredProps.planetName);
	expect(mockOnChange).toHaveBeenCalled();
});