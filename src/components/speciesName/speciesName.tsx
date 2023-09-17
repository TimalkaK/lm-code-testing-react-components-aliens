import { ErrorMessages } from "../errorMessage/errorMessage";

export interface SpeciesNameProps {
	speciesName: string;
	onChangeSpeciesName: (value: string) => void;
  validate : (value: string) => string[];
}

export const SpeciesName : React.FC<SpeciesNameProps> = (props) => { 

  const errorMessages = props.validate(props.speciesName);
  
  return (
  <>
  <label htmlFor='speciesName'>Species Name</label>
  <input id='speciesName' type='text' value={props.speciesName} onChange={(e) => props.onChangeSpeciesName(e.target.value)} />
  <ErrorMessages errorMessages={errorMessages} />
</>
)};


