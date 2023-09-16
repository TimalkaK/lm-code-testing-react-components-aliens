import { render, screen } from '@testing-library/react';
import { SubmitForm, SubmitFormProps } from './submitForm';
import userEvent from '@testing-library/user-event';

test('displays a submit form button', () => {
	//arrange
	const requiredProps: SubmitFormProps = {handleClick: () => {}};
	//act
	render(<SubmitForm {...requiredProps}/>)
	const submitFormButton = screen.getAllByRole("button").find(b => b.textContent === 'Submit Form');
	//assert 
	expect(submitFormButton).toBeInTheDocument();
});



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
