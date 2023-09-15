import { render, screen } from '@testing-library/react';
import { PlanetName, PlanetNameProps } from './planetName';

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
	const planetNameInputBox = screen.getByRole("textbox")
	expect(planetNameInputBox).toBeInTheDocument();
});