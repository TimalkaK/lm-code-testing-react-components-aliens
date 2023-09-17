import { ErrorMessages } from "../errorMessage/errorMessage";

export interface WhatIs2Plus2Props {
  selectedValue : string;
	onChangeSelectedValue: (value: string) => void;
  validate : (value: string) => string[];
}

export const WhatIs2Plus2 : React.FC<WhatIs2Plus2Props> = (props) => {

  const errorMessages = props.validate(props.selectedValue);

return (
  <>
      <label htmlFor='whatIs2+2'>What is 2 + 2?</label>
      <select id='whatIs2+2' name='whatIs2+2' value={props.selectedValue} onChange={(e) => props.onChangeSelectedValue(e.target.value)}> 
        <option value="not4">Not 4</option>
        <option value="4">4</option>
      </select>
      <ErrorMessages errorMessages={errorMessages} />
  </> )};