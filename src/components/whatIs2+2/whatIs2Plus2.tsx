interface WhatIs2Plus2Props {
  selectedValue : string;
	onChangeSelectedValue: (value: string) => void;
}

export const WhatIs2Plus2 : React.FC<WhatIs2Plus2Props> = ({selectedValue, onChangeSelectedValue}) => (
  <>
      <label htmlFor='whatIs2+2'>Number of beings</label>
      <select id='whatIs2+2' name='whatIs2+2' value={selectedValue} onChange={(e) => onChangeSelectedValue(e.target.value)}> 
        <option value="not4">Not 4</option>
        <option value="4">4</option>
      </select>
  </> );