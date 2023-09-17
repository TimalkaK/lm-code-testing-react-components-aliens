import { ErrorMessages } from "../errorMessage/errorMessage";

export interface NumberOfBeingsProps {
	numberOfBeings: number;
	onChangeNumberOfBeings: (value: number) => void;
  validate : (value: number) => string[] | undefined;
}

export const NumberOfBeings : React.FC<NumberOfBeingsProps> = (props) => {

  const errorMessages = props.validate(props.numberOfBeings);
  

  return(
  <>
      <label htmlFor='numberofBeings'>Number of beings</label>
      <input id='numberofBeings' type='text' value={props.numberOfBeings} onChange={(e) => props.onChangeNumberOfBeings(e.target.valueAsNumber)} />
      <ErrorMessages errorMessages={errorMessages} />
  </> )};