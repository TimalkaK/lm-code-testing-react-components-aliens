
interface SpeciesNameProps {
	speciesName: string;
	onChangeSpeciesName: (value: string) => void;
}

export const SpeciesName : React.FC<SpeciesNameProps> = ({speciesName, onChangeSpeciesName}) => (
  <>
      <label htmlFor='speciesName'>Species Name</label>
      <input id='speciesName' type='text' value={speciesName} onChange={(e) => onChangeSpeciesName(e.target.value)} />
  </> );