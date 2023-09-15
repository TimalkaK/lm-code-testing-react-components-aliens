import { render, screen } from '@testing-library/react';
import { SpeciesName, SpeciesNameProps } from './speciesName';

test('renders species name label', () => {
	//arrange
	const requiredProps: SpeciesNameProps = {speciesName: 'humans', onChangeSpeciesName: () => {}}
	//act
	render(<SpeciesName {...requiredProps}/>)
	//assert 
	const speciesNameLabel = screen.getByLabelText('Species Name');
	expect(speciesNameLabel).toBeInTheDocument();
});

test('renders species name input box', () => {
	//arrange
	const requiredProps: SpeciesNameProps = {speciesName: 'humans', onChangeSpeciesName: () => {}}
	//act
	render(<SpeciesName {...requiredProps}/>)
	//assert 
	const speciesNameInputBox = screen.getByRole("textbox");
	expect(speciesNameInputBox).toBeInTheDocument();
});

test('displays a species name input', () => {
	//arrange
	const requiredProps: SpeciesNameProps = {speciesName: 'dog', onChangeSpeciesName: () => {}}
	//act
	render(<SpeciesName {...requiredProps}/>)
	//assert 
	const speciesNameInput = screen.getByDisplayValue(requiredProps.speciesName);
	expect(speciesNameInput).toBeInTheDocument();
});