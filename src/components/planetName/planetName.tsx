import { ErrorMessages } from "../errorMessage/errorMessage";

export interface PlanetNameProps {
	planetName: string;
	onChangePlanetName: (value: string) => void;
  validate : (value: string) => string[];
}

export const PlanetName : React.FC<PlanetNameProps> = (props) => {

  const errorMessages = props.validate(props.planetName);

return(
  <>
      <label htmlFor='planetName'>Planet Name</label>
      <input id='planetName' type='text' value={props.planetName} onChange={(e) => props.onChangePlanetName(e.target.value)} />
      <ErrorMessages errorMessages={errorMessages} />
  </> )};