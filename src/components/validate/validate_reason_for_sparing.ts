export const validateReasonForSparing : (reasonForSparing : string) => string[] = (reasonForSparing) => {

  const errorMessages = ["Must be between 17 and 153 characters."];

  if (reasonForSparing.length < 17 || reasonForSparing.length > 153){
    //return validation message
    return errorMessages;
  }else{
    return [];
  }

};