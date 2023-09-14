interface ReasonForSparingProps {
  reasonForSparing : string;
	onChangeReasonForSparing: (value: string) => void;
}

export const ReasonForSparing : React.FC<ReasonForSparingProps> = ({reasonForSparing, onChangeReasonForSparing }) => (
  <>
      <label htmlFor='reasonForSparing'>Reason for sparing</label>
      <textarea id='reasonForSparing' name='reasonForSparing' rows={4} cols={40} value={reasonForSparing} onChange={(e) => onChangeReasonForSparing(e.target.value)}></textarea>
  </> );