import { render, screen } from '@testing-library/react';
import { SubmitForm, SubmitFormProps } from './submitForm';
import userEvent from '@testing-library/user-event';

test('submit button calls handleClick function', async () => {
	//arrange
	const mockHandleClick = jest.fn();
	const requiredProps: SubmitFormProps = {handleClick: mockHandleClick};
	//act
	render(<SubmitForm {...requiredProps}/>)

	const submitFormButton = screen.getByRole("button");

	await userEvent.click(submitFormButton);
	
	//assert 

	expect(mockHandleClick).toHaveBeenCalledTimes(1);
  expect(mockHandleClick).toHaveBeenCalled();
});
