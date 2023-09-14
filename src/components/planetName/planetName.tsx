interface PlanetNameProps {
	planetName: string;
	onChangePlanetName: (value: string) => void;
}

export const PlanetName : React.FC<PlanetNameProps> = ({planetName, onChangePlanetName}) => (
  <>
      <label htmlFor='planetName'>Planet Name</label>
      <input id='planetName' type='text' value={planetName} onChange={(e) => onChangePlanetName(e.target.value)} />
  </> );