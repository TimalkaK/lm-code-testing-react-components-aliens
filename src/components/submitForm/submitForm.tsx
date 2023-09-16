export interface SubmitFormProps {
	handleClick: () => void;
}

export const SubmitForm : React.FC<SubmitFormProps> = ({handleClick}) => (
  <>
    <button onClick={handleClick}>Submit Form</button>
  </> );