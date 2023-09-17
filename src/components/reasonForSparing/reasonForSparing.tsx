import { ErrorMessages } from "../errorMessage/errorMessage";

export interface ReasonForSparingProps {
  reasonForSparing : string;
	onChangeReasonForSparing: (value: string) => void;
  validate : (value: string) => string[];
}

export const ReasonForSparing : React.FC<ReasonForSparingProps> = (props) => {

  const errorMessages = props.validate(props.reasonForSparing);

return (
  <>
      <label htmlFor='reasonForSparing'>Reason for sparing</label>
      <textarea id='reasonForSparing' name='reasonForSparing' rows={4} cols={40} value={props.reasonForSparing} onChange={(e) => props.onChangeReasonForSparing(e.target.value)}></textarea>
      <ErrorMessages errorMessages={errorMessages} />
  </> )};