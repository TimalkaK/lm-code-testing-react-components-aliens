interface NumberOfBeingsProps {
	numberOfBeings: string;
	onChangeNumberOfBeings: (value: string) => void;
}

export const NumberOfBeings : React.FC<NumberOfBeingsProps> = ({numberOfBeings, onChangeNumberOfBeings}) => (
  <>
      <label htmlFor='numberofBeings'>Number of beings</label>
      <input id='numberofBeings' type='text' value={numberOfBeings} onChange={(e) => onChangeNumberOfBeings(e.target.value)} />
  </> );