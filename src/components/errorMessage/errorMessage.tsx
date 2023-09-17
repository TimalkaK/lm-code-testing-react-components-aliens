export interface ErrorMessagesProps {
	errorMessages?: string[];
}

export const ErrorMessages : React.FC<ErrorMessagesProps> = ({errorMessages}) => {
return (
      <>
      <p className="error-messages" id="errorMessages">{errorMessages}</p>
    </>
    )


  };