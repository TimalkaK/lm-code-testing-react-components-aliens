import { render, screen } from '@testing-library/react';
import { WhatIs2Plus2, WhatIs2Plus2Props } from './whatIs2Plus2';

test('renders number of beings label', () => {
	//arrange
	const requiredProps: WhatIs2Plus2Props = {selectedValue: 'Not 4', onChangeSelectedValue: () => {}}
	//act
	render(<WhatIs2Plus2 {...requiredProps}/>)
	//assert 
	const whatIs2Plus2Label = screen.getByLabelText('What is 2 + 2?');
	expect(whatIs2Plus2Label).toBeInTheDocument();
});

test('renders what is 2+2 input box', () => {
	//arrange
	const requiredProps: WhatIs2Plus2Props = {selectedValue: 'Not 4', onChangeSelectedValue: () => {}}
	//act
	render(<WhatIs2Plus2 {...requiredProps}/>)
	//assert 
	const WhatIs2Plus2InputBox = screen.getByRole("combobox")
	expect(WhatIs2Plus2InputBox).toBeInTheDocument();
});